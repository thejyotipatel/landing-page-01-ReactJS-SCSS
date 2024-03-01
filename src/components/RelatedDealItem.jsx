import ButtonBox from './ButtonBox'

const RelatedDealItem = ({ item }) => {
  const {
    image,
    perOff,
    limitedTime,
    header,
    price,
    maxPrice,
    priceOff,
    desc,
  } = item
  return (
    <>
      <div className='card-container'>
        <div className='card-center'>
          <div className='img-container'>
            <img src={image} alt={header} />
          </div>
          <div className='info-container'>
            <div className='info-header'>
              <p>{perOff}% Off</p>
              {limitedTime && <p> Limited time</p>}
            </div>
            <h3>{header}</h3>
            <p>{desc}</p>
            <div className='price-container'>
              <p>
                ${price} <span>${maxPrice}</span>
                <span className='off-price'>({priceOff})%Off</span>
              </p>
            </div>
          </div>
          <ButtonBox text='View Deal' />
        </div>
      </div>
    </>
  )
}
export default RelatedDealItem
