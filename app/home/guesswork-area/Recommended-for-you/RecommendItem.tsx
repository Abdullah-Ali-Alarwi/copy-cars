import LazyImage from '@/app/components/LazyImage'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function RecommendItem({ name, description, price, image }: { name: string, description: string, price: number, image: string }) {
  return (
    <div className='flex flex-col gap-3 bg-white w-[320px] h-[400px] rounded-lg shadow-md'>
      <div className=' text-gray-700 flex justify-center items-center  absolute top-3 right-3 bg-white w-[27px] rounded-md text-2xl h-[27px]'>
        ♡
      </div>
      <div>
        <Link href="/details">
     <LazyImage
  src={image}
  alt={name}
  width={800}
  height={450}
  className="w-full h-auto rounded-lg"
  loading="lazy"
/>

        </Link>
      </div>
      <div className='px-3'>
        <h3 className="font-semibold">{name}</h3>
        <p className='text-[#797979] my-2'>{description}</p>

        <div className='flex gap-5 items-center'>
          <span className='text-[22px] font-bold'>${price.toLocaleString()}</span>
          <span className='text-[#797979]'>MSRP: $30,590</span>
        </div>
      </div>
    </div>
  )
}
