import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    PieChartOutlined,
  } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom"

const ManagementLayout = ({ children }) => {

    const navigate = useNavigate();

    function getItem(label, key, icon) {
        return {
          label,
          key,
          icon,
          
        };
      }
    const items = [
        getItem('Quản trị phim', '/management/films-management', <PieChartOutlined />),
        getItem('Quản trị vé', '2', <DesktopOutlined />),
        getItem('Quản trị ghế ngồi', '3', <ContainerOutlined />),
        getItem('Quản trị giờ chiếu', 'sub1', <MailOutlined />),
        getItem('Quản trị thể loại phim', 'sub2', <AppstoreOutlined />),
      ];
    const handleClick = (value) => {
        navigate(value?.key);
        console.log(value);
    }
  return (
    <div className='flex'>
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            items={items}
            onClick={handleClick}
            style={{height: "100vh", width: 256}}
        />
        { children }
    </div>
  )
}

export default ManagementLayout;
