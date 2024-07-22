import React, { ReactNode, useState } from 'react';
import {
  AppstoreOutlined,
  BellFilled,
  BellOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Image, Layout, Menu, MenuProps, theme } from 'antd';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import styles from '@/styles/app.module.css';
import UserNoneLogo from './UserNoneLogo';
import SelectLanguage from './SelectLanguage';
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  { key: '1', icon: <PieChartOutlined />, label: 'Statistic' },
  { key: '2', icon: <DesktopOutlined />, label: 'My services' },
  { key: '3', icon: <ContainerOutlined />, label: 'Option 3' },
  {
    key: 'sub1',
    label: 'Services',
    icon: <MailOutlined />,

    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '11', label: 'Option 11' },
          { key: '12', label: 'Option 12' },
          { key: '13', label: 'Option 13' },
          { key: '14', label: 'Option 14' },
        ],
      },
    ],
  },
];

const { Header, Sider, Content } = Layout;
interface AppProps {
  children: ReactNode
}
const App: React.FC<AppProps> = ({ children }) => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const t = useTranslations('PageLayout');
  return (
    <>
      <Head>
        <title>{[t('pageTitle')].join(' - ')}</title>
      </Head>
      <Layout className='max-h-screen h-screen'>

        <div
          style={{

            fontFamily: 'system-ui, sans-serif',
            lineHeight: 1.5,

          }}
        ></div>
        <Sider trigger={null} collapsible collapsed={collapsed} className={`h-screen overflow-y-auto ${styles.customScrollbar}`}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['sub1']}
            items={items}
            defaultOpenKeys={['sub1']}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} className='flex items-center justify-between'>
            <div className='flex items-center'>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <Image width={100}
              preview={false}
              src="next.svg"
              alt=''
            />
            </div>
            <div className='flex items-center gap-2 justify-center'>
            <SelectLanguage/>
            <UserNoneLogo/>
              
            </div>
          </Header>
          <Content
            style={{
              overflow: "auto",
              margin: '24px 16px',
              marginRight: 0,
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default App;