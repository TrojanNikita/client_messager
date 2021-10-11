import { Typography } from 'antd';
import React, {  } from 'react';
// import 'antd/dist/antd.css';
import MainPageLayout from '../components/MainLayout';

// const ENDPOINT = "http://localhost:9003";
// const socket = SocketIOClient('http://localhost:9003');

const IndexPage = () => {
  return (
    <MainPageLayout
      bread={null}
      panel={null}
      content={(<Typography>Добро пожалывать в админку RemCa</Typography>)}
    />
  )
}

export default IndexPage
