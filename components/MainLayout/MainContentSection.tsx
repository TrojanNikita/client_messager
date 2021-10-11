import { Layout } from 'antd';
import React, { ReactNode } from 'react';
import { Content } from 'antd/lib/layout/layout';

type Props = { children: ReactNode };

export default function MainContentSection({children}: Props) {
  return (
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, textAlign: 'center' }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  );
}