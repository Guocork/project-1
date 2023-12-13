import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', 'Page1', <PieChartOutlined />),
  getItem('Option 2', 'Page2', <DesktopOutlined />),
  getItem('User', 'Page3', <UserOutlined />, [
    getItem('Tom', 'Page3/Tom'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];



const Comp: React.FC = () => {
  const [openKeys, setOpenKeys] = useState(['']);
  const navigateTo = useNavigate()

  const menuClick = (e: { key: string }) => {
    console.log('hhh', e.key);
    navigateTo(e.key)
  }
  const onOpenChange=(keys:string[])=>{ 
    setOpenKeys([keys[keys.length-1]]) 
  }


  return(
    <Menu
          theme="dark"
          defaultSelectedKeys={['Page1']}
          mode="inline"
          items={items}
          onClick={menuClick}
          onOpenChange={onOpenChange}
          openKeys={openKeys}
        />
  )
}

export default Comp;
