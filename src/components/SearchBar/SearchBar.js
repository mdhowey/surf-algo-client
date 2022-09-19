import { useState } from 'react'
import './SearchBar.css'
import {BsSearch} from 'react-icons/bs'

const MessageSearch = () => {
  const [q, setQ] = useState('')

  const handleChange = e => setQ(e.target.value)
  return (
    <div className='serach-wrapper'>
      <form className='search'>
        <input
          placeholder='Search for something...'
          value={q}
          onChange={handleChange}
        />
      </form>
      <BsSearch />
    </div>

  )
}

export default MessageSearch