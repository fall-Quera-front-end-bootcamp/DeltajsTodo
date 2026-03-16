import React from 'react'
import Items from './Items'
import { store } from '../../context/store'

export interface ItemType {
  name: string
  price: number
}

const ShopMain = ({
  children,
  className
}: {
  children?: React.ReactElement
  className: string
}): React.ReactNode => {
  const addToCart = (item: ItemType) => {
    console.log('addtocard')
    store.dispatch({
      type: 'add_item',
      item: item
    })
    // store.dispatch({
    //   type: "add_item",
    //   item: [],
    // });
  }

  const dataItems: ItemType[] = [
    { name: 'انار', price: 10000 },
    { name: 'رب', price: 30000 },
    { name: 'گوجه', price: 20000 },
    { name: 'گوجه سبز', price: 200 },
    { name: 'سیب', price: 50000 },
    { name: 'تماته', price: 90000 },
    { name: 'هندوانه', price: 2000 }
  ]
  console.log(store.getState())

  return (
    <>
      <section className={className}>
        <div className="">Cart: {store.getState().length}</div>
        {dataItems.map((item, index) => (
          <Items
            key={index}
            name={item.name}
            price={item.price}
            onClick={addToCart(item)}
          />
        ))}
        {children}
      </section>
    </>
  )
}

export default ShopMain
