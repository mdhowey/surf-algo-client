import { Link } from 'react-router-dom'
import './Navbar.css'
import SearchBar from '../SearchBar/SearchBar'
import { IoIosArrowDown } from 'react-icons/io'
import { BsChatDots } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
      <p className='text-small'>made w/ love by devhowey</p>
      <SearchBar />
      <div className='chat-username-wrapper'>
        <BsChatDots className='chat-icon' />
        <span className='username-navbar'>devhowey</span>
        <BiUserCircle className='avatar'/>
      </div>
      <div className='dropdown'>
        <button className='drop-btn'><IoIosArrowDown /></button>
        <nav>
          <ul className='dropdown-content'>
            <li>
              <Link to='/'>login</Link>
            </li>
            <li>
              <Link to='/register'>register</Link>
            </li>
            <li>
              <Link to='/edit'>edit</Link>
            </li>
            <li>
              <Link to='/feed'>feed</Link>
            </li>
            <li>
              <Link to='/profile'>profile</Link>
            </li>
            <li>
              <Link to='/message'>message</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar