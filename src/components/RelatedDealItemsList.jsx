import RelatedDealItem from './RelatedDealItem'
import { relatedDealCardData } from '../utils/cardData'

const RelatedDealItemsList = () => {
  return (
    <>
      <section className='container'>
        <div className='relateddeal-center'>
          <h1 className=' '>Related deals you might like for</h1>

          <div className='lists'>
            {/* List */}
            {relatedDealCardData.map((item) => {
              return <RelatedDealItem key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}
export default RelatedDealItemsList
