import { IoIosArrowDown } from 'react-icons/io'

import { footerCategoriesLinks, footerContactLinks } from '../utils/links'

const Footer = () => {
  return (
    <footer>
      <section className='container'></section>
      <div className='footer-links'>
        <h2>Categories</h2>
        {footerCategoriesLinks.map((item) => {
          return (
            <li key={item.id}>
              <a className='link' href={item.path}>
                {item.text}
              </a>
            </li>
          )
        })}
      </div>
      <div className='footer-links'>
        <h2>Categories</h2>
        {footerContactLinks.map((item) => {
          return (
            <li key={item.id}>
              <a className='link' href={item.path}>
                {item.text}
              </a>
            </li>
          )
        })}
      </div>
      <div className='footer-links'>
        <button className='btn'>
          United States
          <span className='icon'>
            <IoIosArrowDown />
          </span>
        </button>
      </div>
    </footer>
  )
}
export default Footer
