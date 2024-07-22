import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Table } from "antd";
import type { MenuProps } from "antd";

const UserNoneLogo = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div style={{ }}>
          <ul className="grid  grid-cols-2 grid-rows-2  gap-2">
            <li>Fund: </li>
            <li>0</li>
            <li>Proccess: </li>
            <li>0</li>
          </ul>
        </div>
      ),
    },
    { key: '2', label: 'Profile' },
    { key: '3', label: 'Logout' },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: false }}>
      <Button className='flex items-center ps-2 me-8 gap-2 border h-10 rounded-md'>
        <p>Guess</p>
        <div className='bg-gray-100 h-9 flex items-center w-9 justify-center rounded-full border'>
          <UserOutlined />
        </div>
      </Button>
    </Dropdown>
  );
}

export default UserNoneLogo;
