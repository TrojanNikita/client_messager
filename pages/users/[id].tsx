import { Spin } from 'antd';
import React, { useEffect } from 'react';
import { User } from '../../types/User';
import { findById, saveOne } from '../../api/userRequests';
import MainPageLayout from '../../components/MainLayout';
import { fold, useRemote } from '../../types/RemoteData';
import { useRouter } from 'next/router';
import UserForm from 'components/user/UserForm';
import UserBread from 'components/user/UserBread';

const emptyUser: User = {
    id: 12345,
    name: '',
    mail: '',
    phone: '',
    password: '',
    car_ids: [],
}

export default function UserPage() {
    const router = useRouter();
    const { id } = router.query;
    const {remote, setFetching, setRejected, setSuccess} = useRemote<User>();  

    useEffect(() => {
        if (id === 'new') {
            setSuccess(emptyUser)
        } else if (typeof(id) === 'string') {
            setFetching();
            findById(parseInt(id))
                .then(setSuccess)
                .catch(setRejected);
        }
    }, [])

    const handleSave = (u: User) => {
        saveOne(u)
            .then(_ => setSuccess(u))
            .catch(setRejected)
    }

    return (
        <MainPageLayout
            bread={<UserBread />}
            panel={null}
            content={fold(remote)(
                () => null,
                () => null,
                () => <Spin/>,
                (user) => <UserForm user={user} onSave={handleSave} />,
            )}
        />
    )
}
