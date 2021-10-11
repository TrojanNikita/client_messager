import { Layout, Space } from 'antd';
import React, { ReactNode } from 'react';
import MainHeader from './MainHeader';
import MainSlider from './MainSlider';
import MainContentSection from './MainContentSection';
import styles from './main-layout.module.less';

export const enum Page {
  Main = 'main',
  Users = 'users'
};

type Props = {
  bread: ReactNode,
  content: ReactNode,
  panel: ReactNode,
};

export default function MainPageLayout({bread, panel, content}: Props) {
  return (
      <Layout className={styles.MainLayout}>
        {/* <MainHeader /> */}
        <MainSlider />
        <MainContentSection>
          <Space direction="vertical" style={{width: '100%'}}>
            {bread}
            {panel}
            {content}
          </Space>
        </MainContentSection>
      </Layout>
  );
}