import React from 'react'
import logo from '../../assets/logo.png'
import bg_img from '../../assets/banner.jpg'


const Navbar = () => {
  return (
    <>
      <div className='px-30 py-5 bg-black text-white z-10'>

        <div className='absolute inset-0 bg-center bg-cover opacity-30' style={{backgroundImage:`url(${bg_img})`}}>

        </div>

        {/* Navbar Section */}
        <div className='relative z-0'>
          <div className='flex justify-between items-center'>
              <div className="navbar-left">
                <img className='w-40 h-9' src={logo} alt="" />
              </div>
              <div className='flex items-center'>
                <div>
                  <select className='pr-9 p-1 mr-1 border rounded-md text-center border-gray-500' name="" id="">
                    <option value="English" className='text-black'>English</option>
                    <option value="Arabic" className='text-black'>Arabic</option>
                  </select>
                </div>
                <button className="item-center px-4 py-1.5 rounded-md bg-red-600 font-bold text-sm">
                  Sign In</button>
              </div>
          </div>

        {/* Nav title Section */}
          <div className='flex-col py-30 text-center'>
            <div className='text-6xl font-extrabold leading-18'>
                Unlimited movies,<br></br>
                TV shows and more
            </div>
            <div className='text-xl font-medium leading-14'>
              Starts at ₹149. Cancel at any time.
            </div>
            <div className='text-lg leading-13'>
              Ready to watch? Enter your email to create or restart your membership.
            </div>
            <div className='flex mr-1 justify-center'>
              <input className='pr-58 pl-3 rounded-sm mr-2 border-1 border-gray-500' type="text" placeholder='Email Address' />
              <button className='px-4 py-3 pr-16 bg-red-500 text-2xl font-medium rounded-sm'
              >Get Started</button>
            </div>
          </div>
          </div>
      </div>
  </>
  )
}

export default Navbar