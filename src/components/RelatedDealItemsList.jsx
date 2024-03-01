import RelatedDealItem from './RelatedDealItem'
import { relatedDealCardData } from '../utils/cardData'

const RelatedDealItemsList = () => {
  return (
    <>
      <section className='container'>
        <h1 className='header-text'>Related deals you might like for</h1>

        <div className='lists'>
          {/* List */}
          {relatedDealCardData.map((item) => {
            return <RelatedDealItem key={item.id} item={item} />
          })}
        </div>
      </section>
    </>
  )
}
export default RelatedDealItemsList
