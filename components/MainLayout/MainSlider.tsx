import { Menu } from 'antd';
import React, { CSSProperties, useState } from 'react';
import Sider from 'antd/lib/layout/Sider';
import { useRouter } from 'next/router';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import styles from './main-slider.module.less';
import MainLogo from 'svg/MainLogo';

export const enum Page {
  Main = 'main',
  Users = 'users'
};

const sliderStyle: CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
};

export default function MainSider() {
  const router = useRouter();

  return (
    <Sider theme="light" width={200} style={sliderStyle}>
    <MainLogo />
      <Menu mode="inline" selectedKeys={[router.pathname.includes('/users') ? Page.Users : Page.Main]}>
        <Menu.Item key={Page.Main} icon={<HomeOutlined />} onClick={() => router.push('/')}>
          Главная
        </Menu.Item>
        <Menu.Item key={Page.Users} icon={<UserOutlined />} onClick={() => router.push('/users')}>
          Пользователи
        </Menu.Item>
      </Menu>
    </Sider>
  );
}