import React, { useState } from 'react'

const ProductImages = ({images}) => {
    const [mainImage,setMainImage] = useState(images[0]);
  return (
    <div className='w-11/12 mx-auto'>
        <div className='w-full'>
            <img src={mainImage.url} alt={images[0].fileName} />
        </div>
      <div className='flex justify-center items-center w-full py-4 gap-6'>
        {
            images.map((e,i)=>{
                return (
                    <figure>
                        <img src={e.url} alt={e.fileName} key={i} className='w-16 h-10 hover:cursor-pointer' 
                        onClick={()=>setMainImage(e)}/>
                    </figure>
                )
            })
        }
      </div>
    </div>
  )
}

export default ProductImages
