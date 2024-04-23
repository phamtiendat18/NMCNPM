import React, { useState } from 'react'
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    LeftOutlined,
    RightOutlined,
    PieChartOutlined,
  } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useLocation, useNavigate } from "react-router-dom"

const Management = () => {

    const navigate = useNavigate();

    function getItem(label, key, icon, path) {
        return {
          key,
          icon,
          label,
          path
        };
      }
    const items = [
        getItem('Quản trị phim', '1', <PieChartOutlined />, '/management/films-management'),
        getItem('Quản trị vé', '2', <DesktopOutlined />, 'A2'),
        getItem('Quản trị ghế ngồi', '3', <ContainerOutlined />, 'A3'),
        getItem('Quản trị giờ chiếu', 'sub1', <MailOutlined />, 'A4'),
        getItem('Quản trị thể loại phim', 'sub2', <AppstoreOutlined />, 'A5'),
      ];
    const handleClick = (value) => {
        navigate(value?.item?.props?.path);
    }
  return (
    <div>
        <div
        style={{
            width: 256,
            display: "flex",
            height: "100vh",
        }}
        >
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1']}
            mode="inline"
            theme="dark"
            items={items}
            onClick={handleClick}
        />
        </div>
    </div>
  )
}

export default Management;
