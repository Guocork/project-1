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
import { useNavigate, useLocation } from 'react-router-dom'

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
  getItem('Option 1', '/Page1', <PieChartOutlined />),
  getItem('Option 2', '/Page2', <DesktopOutlined />),
  getItem('User', '/Page3', <UserOutlined />, [
    getItem('Tom', '/Page3/Tom'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];



const Comp: React.FC = () => {
  let firstOpenKeys: string = '';
  const currentRoute = useLocation()
  const navigateTo = useNavigate()

  function findKey(obj:{key:string}) {
    return obj.key === currentRoute.pathname
  }

  for(let i=0;i<items.length;i++){
    if(items[i]!['children'] && items[i]!['children'].length>0 && items[i]!['children'].find(findKey)){
      firstOpenKeys = items[i]!.key
      break
    }
  }

  const [openKeys, setOpenKeys] = useState([firstOpenKeys]);

  const menuClick = (e: { key: string }) => {
    navigateTo(e.key)
  }
  const onOpenChange = (keys: string[]) => {
    setOpenKeys([keys[keys.length - 1]])
  }

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      items={items}
      onClick={menuClick}
      onOpenChange={onOpenChange}
      openKeys={openKeys}
    />
  )
}

export default Comp;
