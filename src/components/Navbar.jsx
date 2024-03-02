import { CiSearch } from 'react-icons/ci'
import { RiMenu3Fill } from 'react-icons/ri'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import FormInput from './FormInput'
import { navbarLinks } from '../utils/links'
import { useState } from 'react'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <section className='navbar '>
        <div className='container'>
          <div className='navbar-center'>
            <FormInput type='text' name='text' icon={<CiSearch />} />
            {/* LINKS */}
            <ul className='nav  ' role='list'>
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

            {/* Mobile link */}
            <button className='btn menu hidden' onClick={() => setMenu(!menu)}>
              <span className='icon'>
                {menu ? <AiOutlineCloseCircle /> : <RiMenu3Fill />}
              </span>
            </button>
          </div>
          {menu && (
            <ul className='responsive-menu hidden' role='list'>
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
          )}
        </div>
      </section>
    </>
  )
}
export default Navbar
