import React, { useEffect } from 'react';
import { Button, Form, Input, notification } from 'antd';
import RootLayout from '../../components/RootLayout';
import { loginAccount } from '../../services/user';
import request from 'umi-request';
import axios from 'axios';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { loginAtom } from '../../atoms/loginAtom';
import { adminAtom } from '../../atoms/roleAtom';
export const baseUrl = "https://g12nhapmoncnpm.somee.com";

const Login = () => {
  const [form] = Form.useForm()
  const [login, setLogin] = useRecoilState(loginAtom);
  const [isAdmin, setIsAdmin] = useRecoilState(adminAtom);
  const onFinish = async (values) => {
    let msg;
    axios.post(`${baseUrl}/Account/loginAccount`, values).then(res => {
      const { data, status } = res;
      console.log("res", res);
      if (+status === 200) {
        setLogin(true);
        if (data?.role === "Admin") {
          setIsAdmin(true);
          localStorage.setItem("isAdmin", true);
        }
        localStorage.setItem('token', data?.token);
        notification.success({
          message: "Thành công!",
          description: `Chào mừng đại vương ${data?.fullName} quay trở lại`,
        })
        form.resetFields()
      }
    });
  };

  useEffect(() => {
    if (login) {
      window.location.href = "/";  
    }
  },[login])
  
  return (
    <RootLayout>
    <div className='w-full flex flex-col items-center justify-center min-h-[100vh]'>
        <h1 className='uppercase text-3xl font-bold text-red-500'>Đăng nhập</h1>
        <Form
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
export default Login;