import { CiSearch } from 'react-icons/ci'

import FormInput from './FormInput'
import { navbarLinks } from '../utils/links'

const Navbar = () => {
  return (
    <>
      <section className='navbar'>
        <div className='navbar-center container'>
          <FormInput type='text' name='text' icon={<CiSearch />} />
          {/* LINKS */}
          <ul className='nav'>
            {navbarLinks.map((item) => {
              return (
                <li key={item.id} className=''>
                  <a href={item.path} className='link'>
                    {item.text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
export default Navbar
