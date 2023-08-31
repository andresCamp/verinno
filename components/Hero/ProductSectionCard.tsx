import Image from 'next/image'
import React from 'react'
import { StaticImageData } from "next/image"
import Link from 'next/link';

interface ProductSectionCardProps {
    img: StaticImageData;
    title: string; 
    link: string;
    desc: string;
}

const ProductSectionCard: React.FC<ProductSectionCardProps> = ({img, title, link, desc}) => {
  return (
    <div className='w-1/3 flex flex-col gap-4'>

        <Link href={link} className=''>
            <div className='flex flex-col gap-4 bg-slate-100  hover:bg-green-100 rounded-3xl p-4 text-center'>
        <div className='p-8'>
            <Image
                src={img}
                alt=''
            />
        </div>
                <h1 className='text-3xl'>{title}</h1>
                <h1 className='font-sans'>{desc}</h1>
            </div>
        </Link>



    </div>
  )
}

export default ProductSectionCard
