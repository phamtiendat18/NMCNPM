import React from 'react'
import axios from 'axios'
import { Button, Form, Input, notification, DatePicker } from 'antd'
import { baseUrl } from '../../pages/Login';
const AddFilm = () => {
    const [form] = Form.useForm();
    const token = localStorage.getItem("token")
    const onFinish = async (body) => {
        axios.post(`${baseUrl}/Phim/Add`, body, { headers: {"Authorization" : `Bearer ${token}`} }).then(res => {
          const { status } = res;
          if (+status === 201) {
            notification.success({
              message: "Thành công!",
              description: "Thêm phim thành công.",
            })
            form.resetFields()
          }
        });
      };
  return (
    <div>
        <Form
        form={form}
        name="basic"
        style={{
          width: "100%",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <div>
          <label htmlFor="">Tên phim</label>
          <Form.Item
            name="sTenPhim"
            rules={[
              {
                required: true,
                message: 'Chưa có tên phim!',
              },
            ]}
          >
            <Input/>
          </Form.Item>
        </div>
        
        <div>
          <label htmlFor="">Thời lượng (phút)</label>
          <Form.Item
            name="iThoiLuong"
            rules={[
              {
                required: true,
                message: 'Bạn chưa nhập thời lượng!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <div>
          <label htmlFor="">ID của thể loại</label>
          <Form.Item
            name="fK_iTheLoaiID"
            rules={[
              {
                required: true,
                message: 'Bạn chưa nhập ID thể loại!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <div>
          <label htmlFor="">Ảnh quảng cáo</label>
          <Form.Item
            name="sAnhQuangCao"
            rules={[
              {
                required: true,
                message: 'Chưa có ảnh quảng cáo!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <div>
          <label htmlFor="">Ngày chiếu</label>
          <Form.Item
            name="dNgayChieu"
            rules={[
              {
                required: true,
                message: 'Chưa có ngày chiếu!',
              },
            ]}
          >
            <DatePicker/>
          </Form.Item>
        </div>

        <div>
          <label htmlFor="">Giá</label>
          <Form.Item
            name="fGia"
            rules={[
              {
                required: true,
                message: 'Chưa có giá!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        
        <div>
          <label htmlFor="">Nội dung</label>
          <Form.Item
            name="sNoiDung"
            rules={[
              {
                required: true,
                message: 'Chưa có nội dung!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <div>
          <label htmlFor="">Trailer</label>
          <Form.Item
            name="sTrailer"
            rules={[
              {
                required: true,
                message: 'Chưa có trailer!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <div>
          <label htmlFor="">Trạng thái</label>
          <Form.Item
            name="sTrangThai"
            rules={[
              {
                required: true,
                message: 'Chưa có trạng thái!',
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
              Thêm phim
            </Button>
          </Form.Item>
        </div> 
      </Form>
    </div>
  )
}

export default AddFilm