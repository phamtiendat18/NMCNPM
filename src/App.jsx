import React, { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import RootLayout from './components/RootLayout'
import { useRecoilState } from 'recoil'
import { loginAtom } from './atoms/loginAtom'
import Home from './pages/Home'
import Login from './pages/Login'
import { adminAtom } from './atoms/roleAtom'

const App = ({ children }) => {
  const [login, setlogin] = useRecoilState(loginAtom)
  const [isAdmin, setisAdmin] = useRecoilState(adminAtom)
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setlogin(true);
      if (localStorage.getItem("isAdmin")) {
        setisAdmin(true);
      }
    } else {
      setlogin(false)
    }
  }, [setlogin, setisAdmin])
  return (
      <>
        {login ? <Home/> : <Login/>}
      </>
  )
}
export default App