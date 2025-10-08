import React from 'react'

function Card({children}) {
  return (
    <div className='cursor-pointer bg-[#2d2721] h-full p-5 rounded-lg'>{children}</div>
  )
}

export default Card