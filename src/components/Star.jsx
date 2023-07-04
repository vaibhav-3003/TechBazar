import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {AiOutlineStar} from 'react-icons/ai';

const Star = ({stars,reviews}) => {

    const ratingStar = Array.from({length: 5},(e,i)=>{
        let number = i + 0.5;

        return (
            <span key={i}>
                {
                    stars >= i + 1
                    ? (<FaStar className='text-yellow-400'/>)
                    : stars >= number ? (
                        <FaStarHalfAlt className='text-yellow-400'/>
                    ) : (
                        <AiOutlineStar className='text-yellow-400'/>
                    )
                }
            </span>
        )
    })
  return (
    <div className='mb-4 flex items-center'>
        <div className='flex gap-1'>

            {ratingStar}
        </div>
        <div className='ml-3'>
            ({reviews} customer reviews)
        </div>
    </div>
  )
}

export default Star
