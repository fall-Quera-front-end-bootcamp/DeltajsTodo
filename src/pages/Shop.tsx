import ShopMain from '../components/ShopMain/ShopMain'
import DateRangePicker from '../components/Calendar/DateRangePicker'

const Shop = (): React.ReactNode => {
  return (
    <section className="contianer">
      <ShopMain className={'flex flex_row flex_wrap padding'}>
        <DateRangePicker />
      </ShopMain>
    </section>
  )
}

export default Shop
