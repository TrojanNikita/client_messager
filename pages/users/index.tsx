import { Input, Space, Spin } from 'antd';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { User } from '../../types/User';
import { findAll } from '../../api/userRequests';
import MainPageLayout from '../../components/MainLayout';
import { fold, useRemote } from '../../types/RemoteData';
import UsersTable from 'components/user/UsersList';
import AddNewButton from 'components/user/AddNewButton';
import { useRouter } from 'next/router';
import UserBread from 'components/user/UserBread';

export default function UserPage() {
  const router = useRouter();
  const {remote, setFetching, setRejected, setSuccess} = useRemote<User[]>();  
  const [searchValue, setSearchValue] = useState<string>('');

  const handleAddClick = () => router.push('users/new');
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  useEffect(() => {
    setFetching();
    findAll()
      .then(setSuccess)
      .catch(setRejected);
  }, []);

  return (
      <MainPageLayout
      bread={<UserBread />}
        panel={(
          <Space style={{width: '100%'}}>
            <Input value={searchValue} onChange={handleSearch} />
            <AddNewButton onClick={handleAddClick} title="Добавить нового пользователя" />
          </Space>
        )}
        content={fold(remote)(
          () => null,
          () => null,
          () => <Spin/>,
          (users) => <UsersTable users={users} />,
        )}
      />
  )
}
