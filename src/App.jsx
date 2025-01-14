import Home from './pages/home/home'
import Users from './pages/users/users'
import Products from './pages/products/products'
import Login from './pages/login/login'

import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer'

import './styles/global.scss'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

function App() {


  const Layout = () => {

    return (
      <div className='main'>

        <Navbar/>

          <div className="container">

            <div className="menuContainer">
              <Menu/>
            </div>

            <div className="contentContainer">
              <Outlet/>
            </div>

          </div>

        <Footer/>

      </div>
    )
  }


  const router = createBrowserRouter ( [
    {
      path:'/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: 'users',
          element: <Users/>
        },
        {
          path: 'products',
          element: <Products/>
        }
      ]
    },
    {
      path: 'login',
      element: <Login/>
    }
  ])


  return <RouterProvider router={router} />
}

export default App
