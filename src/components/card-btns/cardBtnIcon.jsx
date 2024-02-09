import React from 'react'
import StarRating from '../starRating/starRating'

export default function CardBtnIcon({item}) {
  return (
      <div>
          <div className="inline items-center mt-1 ml-1 mb-1 justify-left gap-3 md:gap-3 sm:gap-1  md:flex sm:block">
            <StarRating item={item} />
            <button className="bg-red-600 border-[1px] border-red-600 text-white px-3 md:px-3 sm:px-1 sm:py-0 py-1 rounded-md hover:border-[1px] transition-all ease-in hover:border-red-600 hover:bg-[rgba(0,0,0,0)] box-border inline">
                Buy
            </button>
          {item.downloaded?<div className=" downloaded transition-all ease-in-out p-1 h-7 flex items-center justify-center rounded-lg bg-white w-[30px] text-black md:w-[30px] sm:w-[30px]">
                <span className="font-bold open">open</span>
                <i class="bx bxs-check-circle text-[1.3rem] "></i>
            </div>:""
          
            }
        </div>
    </div>
  )
}
