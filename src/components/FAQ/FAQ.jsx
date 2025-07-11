import React, { useState } from 'react'

const FAQ = () => {
  const [activeIndex, setactiveIndex]=useState(null)
  const handleToggle =(index)=>{
    setactiveIndex((prevIndex)=>(prevIndex===index?null:index))
  }
  const questionSet=[
    {
      "question":"What is Netflix?",
      "answer":"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
      "question":"How much does Netflix cost?",
      "answer":"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
      "question":"Where can I watch?",
      "answer":"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
      "question":"How do I cancel?",
      "answer":"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      "question":"What can I watch on Netflix?",
      "answer":"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
      "question":"Is Netflix good for kids?",
      "answer":"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
  ]
  return (
    <>
    <div className='px-30 pt-10'>
      <div className='font-bold text-2xl'>
        Frequently Asked Questions
      </div>
      {questionSet.map((data,index)=>{
        return(
          <div>
        <div onClick={()=>handleToggle(index)} className='cursor-pointer flex justify-between items-center text-2xl mt-3 font-medium bg-gray-800 p-5 pl-5'>
          <div>{data.question}</div>
          <div className='text-5xl pr-6'>{activeIndex===index?"×":"+"}</div>
        </div>
        <div className={`bg-gray-800 overflow-hidden text-xl font-medium ${activeIndex===index?"max-h-[700px]":"max-h-0"} duration-500 px-5 mt-1`}>{data.answer}</div>
      </div>
        )
      })}

    </div>
    <div className='flex-col mt-10 mb-10 text-center'>
      <div className='text-lg leading-13'>
              Ready to watch? Enter your email to create or restart your membership.
            </div>
            <div className='flex mr-1 justify-center'>
              <input className='pr-58 pl-3 rounded-sm mr-2 border-1 border-gray-500' type="text" placeholder='Email Address' />
              <button className='px-4 py-3 pr-16 bg-red-500 text-2xl font-medium rounded-sm'
              >Get Started</button>
            </div>
    </div>
    </>
  )
}

export default FAQ