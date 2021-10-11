import { Button, Card, Form, Input, InputNumber, Select } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, {  } from 'react';
import { User } from 'types/User';

type Props = {
    user: User;
    onSave: (u: User) => void;
};

const itemStyle = {};

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

export default function UserForm({user, onSave}: Props) {
  const [form] = useForm<User>()  

  const handleFinish = (values: any) => {
    onSave(values);
  };

  return (
        <Form
            {...layout}
            name="basic"
            layout="vertical"
            onFinish={handleFinish}
            initialValues={user}
            // labelCol={{ span: 8 }}
            // wrapperCol={{ span: 16 }}
            // initialValues={{ remember: true }}
            // onFinishFailed={() => null}
            // autoComplete="off"
        >
            <Form.Item
                style={itemStyle}
                label="Id"
                name="id"
                rules={[{ required: true, message: 'Please input your id!' }]}
            >
                <InputNumber />
            </Form.Item>

            <Form.Item
                style={itemStyle}
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                style={itemStyle}
                label="Username"
                name="name"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                style={itemStyle}
                label="Mail"
                name="mail"
                rules={[{ required: true, message: 'Please input your mail!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                style={itemStyle}
                label="Phone"
                name="phone"
                rules={[{ required: true, message: 'Please input your phone!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                style={itemStyle}
                label="Cars"
                name="car_ids"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Select
                    mode="multiple"
                    allowClear
                >
                    <Select.Option value={1}>Honda</Select.Option>
                    <Select.Option value={2}>Kia</Select.Option>
                    <Select.Option value={3}>BMW</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item shouldUpdate>
                {() => (
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={
                            !form.isFieldsTouched(true) ||
                            !!form.getFieldsError().filter(({ errors }) => errors.length).length
                        }
                    >
                        Save
                    </Button>
                )}
            </Form.Item>
        </Form>
  );
}