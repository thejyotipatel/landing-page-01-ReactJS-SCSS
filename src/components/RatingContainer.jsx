import { FaStar, FaRegStarHalfStroke } from 'react-icons/fa6'
import ButtonBox from './ButtonBox'

const RatingContainer = ({ ratingNum, ratingText }) => {
  return (
    <>
      <div className='rating-container'>
        <div className='rating-center'>
          <h1>{ratingNum}</h1>
          <p>{ratingText}</p>
          <div className='stars'>
            <span className='icon'>
              <FaStar />
            </span>
            <span className='icon'>
              <FaStar />
            </span>
            <span className='icon'>
              <FaStar />
            </span>
            <span className='icon'>
              <FaStar />
            </span>
            <span className='icon'>
              <FaRegStarHalfStroke />
            </span>
          </div>
        </div>
        <ButtonBox text='View' />
      </div>
    </>
  )
}
export default RatingContainer
