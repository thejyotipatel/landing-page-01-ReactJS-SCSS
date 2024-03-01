import { hostingCardData } from '../utils/cardData'
import HostingCard from './HostingItem'
import { AiOutlineRight } from 'react-icons/ai'

const HostingItemsList = () => {
  return (
    <>
      <section className='container'>
        {/* breadcrumbs */}
        <div className=' breadcrumbs '>
          <ul>
            <li>
              <a className='link' href='/'>
                Home
              </a>
            </li>
            <li>
              <a className='link' href='#'>
                <span className='icon'>
                  <AiOutlineRight />
                </span>
                Hosting for all
              </a>
            </li>
            <li>
              <a className='link' href='#'>
                <span className='icon'>
                  <AiOutlineRight />
                </span>
                Hosting
              </a>
            </li>
            <li>
              <a className='link' href='#'>
                <span className='icon'>
                  <AiOutlineRight />
                </span>
                Hosting6
              </a>
            </li>
            <li>
              <a className='link' href='#'>
                <span className='icon'>
                  <AiOutlineRight />
                </span>
                Hosting5
              </a>
            </li>
          </ul>
        </div>

        {/* Hosting  List */}
        <div className='lists'>
          {hostingCardData.map((item) => {
            return <HostingCard key={item.id} item={item} />
          })}
        </div>
      </section>
    </>
  )
}
export default HostingItemsList
