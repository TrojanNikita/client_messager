import { Breadcrumb, Layout, List, Menu, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { User } from '../types/User';
import { findAll } from '../api/userRequests';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import SubMenu from 'antd/lib/menu/SubMenu';
import 'antd/dist/antd.css';
import MainPageLayout, { Page } from '../components/MainPageLayout';
import useSocket from '../hooks/useSockets';
import io from "socket.io-client";

// const ENDPOINT = "http://localhost:9003";
// const socket = SocketIOClient('http://localhost:9003');

const IndexPage = () => {
  // const socket = useSocket()
  


  // useEffect(() => {
  //   if (socket) {
  //     socket.on('*', (payload) => console.log(payload))
  //   }
  // }, [socket])



  return (
    <MainPageLayout>
      <Typography >Hello</Typography>
    </MainPageLayout>
  )
}

export default IndexPage
