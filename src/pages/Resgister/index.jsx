import { Button, Form, Input, notification } from 'antd'
import React from 'react'
import RootLayout from '../../components/RootLayout'
import { baseUrl } from '../Login'
import axios from 'axios'

const Register = () => {
  const [form] = Form.useForm()
  const onFinish = async (values) => {
    axios.post(`${baseUrl}/Account/registerAccountUser`, values).then(res => {
      const { status } = res;
      if (+status === 200) {
        notification.success({
          message: "Thành công!",
          description: "Chúc mừng bạn đã đăng ký thành công ^^.",
        })
        form.resetFields()
      }
    });
  };

  return (
    <RootLayout>
      <div className='w-full flex flex-col items-center justify-center min-h-[100vh]'>
        <h1 className='uppercase text-3xl font-bold text-red-500'>Đăng ký tài khoản</h1>
        <Form
        form={form}
        name="basic"
        style={{
          width: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <div>
          <label htmlFor="">Tên tài khoản</label>
          <Form.Item
            name="sUserName"
            rules={[
              {
                required: true,
                message: 'Bạn chưa nhập tên tài khoản!',
              },
            ]}
          >
            <Input/>
          </Form.Item>
        </div>
        
        <div>
          <label htmlFor="">Họ và tên</label>
          <Form.Item
            name="sFullName"
            rules={[
              {
                required: true,
                message: 'Bạn chưa nhập họ tên!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <div>
          <label htmlFor="">Số điện thoại</label>
          <Form.Item
            name="sPhoneNumber"
            rules={[
              {
                required: true,
                message: 'Bạn chưa nhập số điện thoại!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <div>
          <label htmlFor="">Mật khẩu</label>
          <Form.Item
            name="sPassword"
            rules={[
              {
                required: true,
                message: 'Bạn chưa nhập mật khẩu!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </div>

        <div>
          <label htmlFor="">Năm sinh</label>
          <Form.Item
            name="dDateOfBirth"
            rules={[
              {
                required: true,
                message: 'Bạn chưa nhập năm sinh!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <div>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            style={{ textAlign: 'right'}}
          >
            <Button type="primary" htmlType="submit" style={{background: 'red'}}>
              Đăng nhập
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  </RootLayout>
  )
}

export default Register