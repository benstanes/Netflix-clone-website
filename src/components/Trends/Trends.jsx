import React from 'react'
import trend1 from '../../assets/Trend1.webp'
import trend2 from '../../assets/Trend2.webp'
import trend3 from '../../assets/Trend3.webp'
import trend4 from '../../assets/Trend4.webp'
import trend5 from '../../assets/Trend5.webp'
import trend6 from '../../assets/Trend6.webp'
const Trends = () => {
  const movies =[
    {
      "id":1,
      "url":trend1
    },
    {
      "id":2,
      "url":trend2
    },
    {
      "id":3,
      "url":trend3
    },
    {
      "id":4,
      "url":trend4
    },
    {
      "id":5,
      "url":trend5
    },
    {
      "id":6,
      "url":trend6
    },
  ]
  return (
    <div className='px-30 pt-10'>
      <div className='font-bold text-2xl'>
        Trending Now
      </div>
      <div className='flex gap-10 overflow-scroll hide-scrollbar'>
      {movies.map((movies,index)=>{
        return(
          
      <div className='pt-5 relative'>
        <img className='rounded-2xl min-w-[180px]' src={movies.url} alt="" />
        <div className='absolute text-9xl font-bold bottom-0 left-[-25px] text-stroke-white'>
          {movies.id}</div>
      </div>
        )
      })}
      </div>
    </div>
  )
}

export default Trends