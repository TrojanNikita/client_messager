import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Space } from "antd";
import React from "react";

export default function UserBread() {
    return (
        <Space style={{width: '100%'}}>
            <Breadcrumb>
                <Breadcrumb.Item href="">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/users">
                    <UserOutlined />
                    <span>Users List</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Current</Breadcrumb.Item>
            </Breadcrumb>
        </Space>
    );
}