import { IoIosArrowDown } from 'react-icons/io'
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
  } = item

  return (
    <>
      <div className='hosting-item'>
        <div className='item-number'>{id}</div>

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

        <div className='hosting-item-center'>
          <div className='img-container'>
            <img src={image} alt={imgText} />
          </div>
          <div className='info-container'>
            <p className=''>
              <span>{header}</span> {desc}
            </p>
            <h3>Main highlights</h3>
            {mainHLText && <p>{mainHLText}</p>}
            {mainHLList && (
              <ul>
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
                <p>Why we love it</p>
                {list.map((item, index) => {
                  return <li key={index}>{item}</li>
                })}
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
