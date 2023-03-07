import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductItem({product}) {
  return (
    <div className='card'>
        <Link href ={`/product/${product.slug}`}>
            <Image src={product.image} alt={product.name} className = 'rounded shadow'/>
        </Link>
        <div className='flex flex-col items-center justify-center p-2'> 
        <Link href={`/product/${product.slug}`}>
        <h2 className='text-lg'>{product.name}</h2>
        </Link>
        </div>
    </div>
  )
}

export default ProductItem