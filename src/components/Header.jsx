import { CiCircleCheck, CiCircleInfo } from 'react-icons/ci'
import { FaChevronDown } from 'react-icons/fa6'

const headerTags = [
  'Tools',
  'AWS Builder',
  'Start Build',
  'Build Supplies',
  'Tooling',
  'BlueHosting',
]

const Header = () => {
  const day = new Date()
  return (
    <>
      <header className='container'>
        <div className='header-center'>
          <h1 className='header-text'>Best Website builders in the US</h1>

          <div className='time-dates'>
            <p className=''>
              <span className='icon'>
                <CiCircleCheck />
              </span>
              Last Updated - February 22, 2020
              <span className='icon'>
                <CiCircleInfo />
              </span>
              Advertising Disclosure
            </p>
            <button className='btn'>
              Top Relevant
              <span className='icon'>
                <FaChevronDown />
              </span>
            </button>
          </div>

          {/* TAGS */}
          <ul className='tags'>
            {headerTags.map((item, index) => {
              return (
                <li key={index} className=''>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      </header>
    </>
  )
}
export default Header
