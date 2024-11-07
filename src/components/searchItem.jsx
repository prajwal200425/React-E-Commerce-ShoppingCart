import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import items from "./data"
import { useState } from 'react'
import Product from "./Product"
const searchItem = ( {cart , setCart}) => {
  const { productName } = useParams()
  const [filterData, setFilterData] = useState([])

  useEffect(() => {
    const filterData = () => {
      const data = items.filter((p) => p.title.toLowerCase().includes(productName.toLowerCase()));
// console.log(data)
setFilterData(data);
    }

    filterData();
  }, [productName])

  return (
    <Product cart={cart} setCart={setCart} items={filterData}/>
  )
}

export default searchItem
