import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, Input, Image, Table, TablePaginationConfig } from 'antd';
import { PlatformModel } from '@/libs/redux/models/platform.model';
import GenericTable from '@/components/app/GenericTable';
import { usePlatformList } from '@/libs/redux/hooks/platform-list.hook';
import { debounce } from 'lodash';

const PlatformListContainer: React.FC = () => {
  const router = useRouter();
  const { query } = router;

  const getStringFromQuery = (param: string | string[] | undefined): string => {
    if (Array.isArray(param)) {
      return param[0];
    }
    return param || '';
  };

  const getNumberFromQuery = (param: string | string[] | undefined, defaultValue: number): number => {
    if (Array.isArray(param)) {
      return parseInt(param[0], 10) || defaultValue;
    }
    return parseInt(param || '', 10) || defaultValue;
  };

  const [searchTerm, setSearchTerm] = useState<string>(getStringFromQuery(query.searchTerm));
  const [page, setPage] = useState<number>(getNumberFromQuery(query.page, 1));
  const [pageSize, setPageSize] = useState<number>(getNumberFromQuery(query.pageSize, 10));

  const { isFetchingData, platforms, total, refetch } = usePlatformList(searchTerm, page, pageSize);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Icon',
      dataIndex: 'icon',
      key: 'icon',
      render: (icon: string) => <Image width={25} src={icon} alt="" />,
    },
    {
      title: 'CreatedAt',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt: string) => new Date(createdAt).toLocaleDateString(),
    },
  ];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchTerm = params.get('searchTerm');
    const page = params.get('page');
    const pageSize = params.get('pageSize');

    if (searchTerm) setSearchTerm(searchTerm);
    if (page) setPage(Number(page));
    if (pageSize) setPageSize(Number(pageSize));
  }, []);

  useEffect(() => {
    const newUrl = {
      pathname: router.pathname,
      query: { searchTerm, page, pageSize },
    };
    router.push(newUrl, undefined, { shallow: true });
  }, [searchTerm, page, pageSize]);

  const handleTableChange = (pagination: TablePaginationConfig) => {
    const currentPage = pagination.current || 1;
    const currentPageSize = pagination.pageSize || 10;
    setPage(currentPage);
    setPageSize(currentPageSize);
  };

  const onSearchChange = debounce((e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    setPage(1); // Reset to first page on search change
  }, 300)

  return (
    <>
      <div className="flex justify-between mb-4">
        <Input
          placeholder="Search..."
          defaultValue={searchTerm}
          onChange={onSearchChange}
        />
        <Button type="primary">Create</Button>
      </div>
      <GenericTable<PlatformModel>
        dataSource={platforms}
        columns={columns}
        rowKey="id"
        loading={isFetchingData}
        pagination={{
          total,
          current: page,
          pageSize: pageSize,
        }}
        onChange={handleTableChange}
      />
    </>
  );
};

export default PlatformListContainer;
