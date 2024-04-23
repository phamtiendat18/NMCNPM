import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { loginAtom } from '../../atoms/loginAtom'

const InfoModal = () => {
    const setLogin = useSetRecoilState(loginAtom)
    const handleLogout = () => {
        setLogin(false);
        localStorage.removeItem('token');
    }
  return (
    <div  className='absolute top-[120%] w-[300px] right-0 bg-red-100 font-md p-[20px] rounded rounded-[10px] shadow-xl'>
        <div>
          <Link to={`/account/user_info`}>Thông tin cá nhân</Link>
        </div>
        <div>
          <Link to={`/management`}>Trang quản trị</Link>
        </div>
        <div className='cursor-pointer' onClick={handleLogout}>Đăng xuất</div>
    </div>
  )
}

export default InfoModal