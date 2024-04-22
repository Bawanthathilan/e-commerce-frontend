import React from 'react'
import ProductCard from '@/components/Molecules/ProductCard'

const HomePage = () => {
  return (
    <div className='mt-10'>
      <div className="flex flex-row gap-5">
        <ProductCard title='Milk' description='jshjhjsjhdjhdshdjshdjshdjshdjshdjsh'/>
        <ProductCard title='Milk' description='jshjhjsjhdjhdshdjshdjshdjshdjshdjsh'/>
        <ProductCard title='Milk' description='jshjhjsjhdjhdshdjshdjshdjshdjshdjsh'/>
        <ProductCard title='Milk' description='jshjhjsjhdjhdshdjshdjshdjshdjshdjsh'/>
       
      </div>
    </div>
  )
}

export default HomePage