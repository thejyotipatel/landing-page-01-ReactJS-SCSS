import { AiOutlineRight } from 'react-icons/ai'

import { hostingCardData } from '../utils/cardData'
import HostingCard from './HostingItem'

const HostingItemsList = () => {
  return (
    <>
      <section className='container'>
        {/* breadcrumbs */}
        <div className=' breadcrumbs '>
          <ul role='list'>
            <li>
              <a className='link' href='/'>
                Home
              </a>
            </li>
            <li>
              <span className='icon'>
                <AiOutlineRight />
              </span>
              <a className='link' href='#'>
                Hosting for all
              </a>
            </li>
            <li>
              <span className='icon'>
                <AiOutlineRight />
              </span>
              <a className='link' href='#'>
                Hosting
              </a>
            </li>
            <li>
              <span className='icon'>
                <AiOutlineRight />
              </span>
              <a className='link' href='#'>
                Hosting6
              </a>
            </li>
            <li>
              <span className='icon'>
                <AiOutlineRight />
              </span>
              <a className='link' href='#'>
                Hosting5
              </a>
            </li>
          </ul>
        </div>

        {/* Hosting  List */}
        <div className='hosting-lists'>
          {hostingCardData.map((item) => {
            return <HostingCard key={item.id} item={item} />
          })}
        </div>
      </section>
    </>
  )
}
export default HostingItemsList
