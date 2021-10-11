import { Table } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { User } from "types/User";

type Props = {users: User[]};


const getColumns = (onRouterClick: (str: string) => void) => [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: ({name, id}: {name: string, id: number}) => <a onClick={() => onRouterClick(String(id))}>{name}</a>,
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Mail',
      key: 'mail',
      dataIndex: 'mail',
      render: (text: string) => <a>{text}</a>,
    },
  ];


  export default function UsersTable({users}: Props) {
    const router = useRouter();

    const handleRouterClick = (str: string) => router.push(`users/${str}`);

    return (
        <Table
            columns={getColumns(handleRouterClick)}
            dataSource={users.map(({id, name, password, phone, mail}) => ({
                key: id,
                name: {name, id},
                password,
                mail,
                phone,
            }))}
        />
    );
  };