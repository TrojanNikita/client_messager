import { Typography } from 'antd';
import React, {  } from 'react';
import { Header } from 'antd/lib/layout/layout';
import styles from './main-header.module.less';
import MainLogo from 'svg/MainLogo';

export default function MainHeader() {
  return (
    <Header className={styles.MainHeader}>
      <MainLogo />
    </Header>
  );
}