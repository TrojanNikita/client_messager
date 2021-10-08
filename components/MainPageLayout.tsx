import { Breadcrumb, Layout, List, Menu, Typography } from 'antd';
import React, { CSSProperties, ReactNode, useEffect, useState } from 'react';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import { useRouter } from 'next/router';

export const enum Page {
  Main = 'main',
  Users = 'users'
};

type Props = { children: ReactNode };

const layoutStyle: CSSProperties = { minHeight: '100%' };

const sliderStyle: CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
};

export default function MainPageLayout({children}: Props) {
  const router = useRouter();

  return (
      <Layout style={layoutStyle}>
        <Sider style={sliderStyle}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" selectedKeys={[router.pathname === '/users' ? Page.Users : Page.Main]}>
            <Menu.Item key={Page.Main} onClick={() => router.push('/')}>
              Главная
            </Menu.Item>
            <Menu.Item key={Page.Users} onClick={() => router.push('/users')}>
              Пользователи
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: 'center' }}
            >
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
  );
}