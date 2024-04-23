import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login/index.jsx'
import Register from './pages/Resgister/index.jsx'
import "./index.css"
import { RecoilRoot } from 'recoil'
import Home from './pages/Home/index.jsx'
import RootLayout from './components/RootLayout/index.jsx'
import FIlms from './pages/Films/index.jsx'
import FIlmManagement from './pages/FilmsManagement/index.jsx'
import Management from './pages/Management/index.jsx'
// init routes
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/films",
    element: <FIlms/>
  },
  {
    path: "/management",
    element: <Management/>
  },
  {
    path: "/management/films-management",
    element: <FIlmManagement/>
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <RouterProvider router={routes}>
      <RootLayout>
        <App />
      </RootLayout>
    </RouterProvider>
  </RecoilRoot>
)
