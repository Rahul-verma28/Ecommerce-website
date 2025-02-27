import Collections from '@/components/Collections'
import Home from '@/components/Home'
import ProductList from '@/components/Products'
import React from 'react'

const page = () => {
  return (
    <div>
      <Home/>
      <Collections/>
      <ProductList/>
    </div>
  )
}

export default page
