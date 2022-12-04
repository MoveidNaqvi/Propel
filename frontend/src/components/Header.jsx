import {Link} from 'react-router-dom'
import {AiOutlinePlus} from 'react-icons/ai'
import {MdDeleteForever} from 'react-icons/md'
import {FaEdit, FaAddressBook} from 'react-icons/fa'

function Header() {
  return (
    <header className='header'>
      <div className="logo">
        <Link to='/'><FaAddressBook/>AddressBook</Link>
      </div>
      <ul>
        <li>
          <Link to='/create'><AiOutlinePlus/>Create contact</Link>
        </li>
      </ul>
    </header>
  )
}
export default Header