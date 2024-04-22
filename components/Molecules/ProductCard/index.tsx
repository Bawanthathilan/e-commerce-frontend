import React from 'react'
import Image from 'next/image'
import PlaceholderImg from '@/assets/placeholder.png'

interface ProductCardI{
    title: string
    description: string
}

const ProductCard = ({title , description}:ProductCardI) => {
  return (
    <div className='border-2 p-2 flex flex-col gap-4'>
        <Image src={PlaceholderImg} height={300} width={300} alt={title} />

        <div className='flex flex-col gap-3'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ProductCard