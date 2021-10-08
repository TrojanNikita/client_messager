import { Breadcrumb, Layout, List, Menu, Spin, Typography } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { User } from '../types/User';
import { findAll } from '../api/userRequests';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import SubMenu from 'antd/lib/menu/SubMenu';
import MainPageLayout, { Page } from '../components/MainPageLayout';
import { fold, RequestProgressStatus, useRemote } from '../types/RemoteData';

export default function UserPage() {
    const {remote, setFetching, setRejected, setSuccess} = useRemote<User[]>();
    const ref = useRef(new WebSocket("ws://127.0.0.1:9003/ws"))



  useEffect(() => {

    ref.current.onopen = () => { ref.current.send("Hi") }

    ref.current.onmessage = (ev: MessageEvent) => {
      
      const message = JSON.parse(ev.data);

      if (remote.type === RequestProgressStatus.Successful) {
        setSuccess([...remote.data, message]);
      } else {
        setSuccess([message]);
      }


      console.log(message)
    }
  }, [remote])
  

  useEffect(() => {
    setFetching();
    findAll()
      .then(setSuccess)
      .catch(setRejected);
  }, [])

  return (
      <MainPageLayout>
          {fold(remote)(
              () => null,
              () => null,
              () => <Spin/>,
              (users) => (
                <List
                    className="site-layout-background"
                    style={{ padding: 24, textAlign: 'center' }}
                    bordered
                    dataSource={users}
                    renderItem={item => (
                        <List.Item>
                        <List.Item.Meta
                            title={item.name}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                        </List.Item>
                    )}
                />
              ),
          )}
      </MainPageLayout>
  )
}
