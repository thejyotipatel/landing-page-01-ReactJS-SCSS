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
  return (
    <>
      <header className='container'>
        <div className='header-center'>
          <h1 className='header-text'>Best Website builders in the US</h1>

          <div className='time-dates'>
            <p className=''>
              <span className='icon'>
                <CiCircleCheck />
                Last Updated - February 22, 2020
              </span>
              <span className='icon'>
                <CiCircleInfo />
                Advertising Disclosure
              </span>
            </p>
            <button className='btn'>
              Top Relevant
              <span className='icon'>
                <FaChevronDown />
              </span>
            </button>
          </div>

          {/* TAGS */}
          <ul className='tags' role='list'>
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
