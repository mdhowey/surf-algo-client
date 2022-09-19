import {Outlet} from 'react-router-dom'
import './Layout.css'
import Navbar from '../../components/Navbar/Navbar'

const Layout = () => {
  return (
    <div className='page-wrapper'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout