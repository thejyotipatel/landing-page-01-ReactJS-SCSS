import { IoIosArrowDown } from 'react-icons/io'

import { footerCategoriesLinks, footerContactLinks } from '../utils/links'

const Footer = () => {
  return (
    <footer>
      <section className='container'>
        <div className='links'>
          <div className='footer-links'>
            <h2>Categories</h2>
            <ul role='list'>
              {footerCategoriesLinks.map((item) => {
                return (
                  <li key={item.id}>
                    <a className='link' href={item.path}>
                      {item.text}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='footer-links'>
            <h2>Contact</h2>
            <ul role='list'>
              {footerContactLinks.map((item) => {
                return (
                  <li key={item.id}>
                    <a className='link' href={item.path}>
                      {item.text}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='footer-links'>
            <button className='btn'>
              United States
              <span className='icon'>
                <IoIosArrowDown />
              </span>
            </button>
          </div>
        </div>
      </section>
    </footer>
  )
}
export default Footer
