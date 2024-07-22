import React from 'react';
import { Table, TableProps,  } from 'antd';
import { ColumnType } from 'antd/es/table';

// Define a constraint for T
type AnyObject = Record<string, any>;

// Define the type for column configuration
type GenericTableProps<T extends AnyObject> = {
  dataSource: T[];
  columns: ColumnType<T>[]; // Use ColumnType from Ant Design
  rowKey: keyof T;
  loading?: boolean;
} & Omit<TableProps<T>, 'dataSource' | 'columns' | 'rowKey'>; // Omit conflicting props

// Create a generic Table component
const GenericTable = <T extends AnyObject,>({
  dataSource,
  columns,
  rowKey,
  loading,
  ...rest
}: GenericTableProps<T>) => {
  return (
    <Table<T>
      dataSource={dataSource}
      columns={columns}
      rowKey={rowKey as string} // Cast key to string
      loading={loading}
      {...rest}
    />
  );
};

export default GenericTable;
