import { Col, Row } from "antd";
import React from "react";
import { User } from "types/User";

type Props = {
    user: User;
};

export default function UserCard({user}: Props) {
    return (
        <>
            <Row>
                <Col flex={2}>Имя</Col>
                <Col flex={3}>{user.name}</Col>
            </Row>
            <Row>
                <Col flex={2}>Пароль</Col>
                <Col flex={3}>{user.password}</Col>
            </Row>
            <Row>
                <Col flex={2}>Mail</Col>
                <Col flex={3}>{user.mail}</Col>
            </Row>
        </>
    );
}