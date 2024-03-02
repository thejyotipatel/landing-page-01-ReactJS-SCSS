import { IoIosArrowDown, IoIosCheckmark } from 'react-icons/io'
import { IoDiamondOutline } from 'react-icons/io5'
import { BsTrophy } from 'react-icons/bs'

import RatingContainer from './RatingContainer'

const HostingItem = ({ item }) => {
  const {
    id,
    image,
    imgText,
    header,
    desc,
    mainHLText,
    mainHLList,
    list,
    ratingNum,
    ratingText,
    showMore,
    perOff,
  } = item

  return (
    <>
      <div className='hosting-item'>
        {id === 1 && (
          <div className='best-tag'>
            <span className='icon'>
              <BsTrophy />
            </span>
            Best Choice
          </div>
        )}
        {id === 2 && (
          <div className='best-tag'>
            <span className='icon'>
              <IoDiamondOutline />
            </span>
            Best Value
          </div>
        )}

        <div className='item-number'>{id}</div>

        <div className='hosting-item-center'>
          <div className='img-container'>
            <img src={image} alt={imgText} />
            <p>{imgText}</p>
          </div>

          <div className='info-container'>
            <p>
              <span>{header}</span> {desc}
            </p>

            {perOff && <p className='peroff'>{perOff}% Off</p>}

            <h3>Main highlights</h3>

            {mainHLText && <p className='text'>{mainHLText}</p>}

            {mainHLList && (
              <ul className='text-list' role='list'>
                {mainHLList.map((l, index) => {
                  return (
                    <li key={index}>
                      <span>{l.num} </span>
                      {l.text}
                    </li>
                  )
                })}
              </ul>
            )}

            {list && (
              <>
                <p className='list2-head'>Why we love it</p>
                <ul className='list2' role='list'>
                  {list.map((item, index) => {
                    return (
                      <li key={index}>
                        <span>
                          <IoIosCheckmark />
                        </span>
                        {item}
                      </li>
                    )
                  })}
                </ul>
              </>
            )}

            <button className='btn'>
              show more
              {showMore && (
                <span className='icon'>
                  <IoIosArrowDown />
                </span>
              )}
            </button>
          </div>

          <RatingContainer ratingNum={ratingNum} ratingText={ratingText} />
        </div>
      </div>
    </>
  )
}
export default HostingItem
