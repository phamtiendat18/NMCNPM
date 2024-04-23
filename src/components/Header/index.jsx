import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { loginAtom } from '../../atoms/loginAtom'
import { UserOutlined } from "@ant-design/icons"
import InfoModal from '../InfoModal'
import { adminAtom } from '../../atoms/roleAtom'
const Header = () => {
  const pathName = window.location.pathname.split("/")[1];
  const login = useRecoilValue(loginAtom);
  const [showInfoModal, setShowInfoModal] = useState(false)
  return (
    <div className="header-2">
  <nav className="bg-white py-2 md:py-4">
    <div className="container px-4 mx-auto md:flex md:items-center">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-indigo-600">
          <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png" alt="" />
        </Link>
        <button
          className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
          id="navbar-toggle"
        >
          <i className="fas fa-bars" />
        </button>
      </div>
      <div
        className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
        id="navbar-collapse"
      >
        <Link
          to="/"
          className={`p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${pathName === "" ? 'bg-red-500 text-white' : '' } `}
        >
          Trang chủ
        </Link>
        <Link
          to="/films"
          className={`p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${pathName === "films" ? 'bg-red-500 text-white' : '' } `}
          >
            Phim
        </Link>
        <Link
          to="/place"
          className={`p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${pathName === "place" ? 'bg-red-500 text-white' : '' } `}
        >
          Rạp chiếu CGV
        </Link>
        <Link
          to="office"
          className={`p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${pathName === "office" ? 'bg-red-500 text-white' : '' } `}
        >
          Quầy vé
        </Link>
        <Link
          to="/support"
          className={`p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 ${pathName === "support" ? 'bg-red-500 text-white' : '' } `}
        >
          Hỗ trợ khách hàng
        </Link>
        
        {
          !login ? 
            <>
              <Link
              to="/login"
              className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
              >
                Đăng nhập
              </Link>
              <Link to="/register" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-red-500 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
                  Đăng ký
              </Link>
            </> : <div className='relative flex items-center justity-center p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300' onClick={() => setShowInfoModal(!showInfoModal)}>
                    <UserOutlined />
                    {showInfoModal ? <InfoModal/> : ""}
                  </div>
        }
      </div>
    </div>
  </nav>
</div>

  )
}

export default Header