import React from 'react'
const Footer = () => {
  return (
    <div className='px-30 pt-10 h-screen'>
      <div className='pb-12 underline text-gray-300'>
        Questions? Call 000-800-919-1743
      </div>
      <div className='flex gap-32 underline text-sm text-gray-300'>
        <div className='flex-col justify-start pb-4'>
          <div className='pb-3'>FAQ</div>
          <div className='pb-3'>Help Centre</div>
          <div className='pb-3'>Account</div>
          <div className='pb-3'>Media Centre</div>
        </div>
        <div className='flex-col justify-start pb-4'>
          <div className='pb-3'>Investor Relations</div>
          <div className='pb-3'>Jobs</div>
          <div className='pb-3'>Ways to watch</div>
          <div className='pb-3'>Terms of Use</div>
        </div>
        <div className='flex-col justify-start pb-4'>
          <div className='pb-3'>Privacy</div>
          <div className='pb-3'>Cookie Preferences</div>
          <div className='pb-3'>Corporate Information</div>
          <div className='pb-3'>Contact Us</div>
        </div>
        <div className='flex-col justify-start pb-10'>
          <div className='pb-3'>Speed Test</div>
          <div className='pb-3'>Legal Notices</div>
          <div className='pb-3'>Only on Netflix</div>
        </div>
      </div>

      <div className='mt-5 '>
        <select className='pr-9 p-1 mr-1 border rounded-md text-center border-gray-500' name="" id="">
            <option value="English" className='text-black'>English</option>
            <option value="Arabic" className='text-black'>Arabic</option>
        </select>
      </div>
      <div className='mt-8 text-sm text-gray-300'>Netflix India</div>
      <div className='mt-8 text-sm text-gray-500'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</div>
    </div>
    
  )
}

export default Footer