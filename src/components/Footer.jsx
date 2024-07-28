import React from 'react'
import logo from "../assets/logo.png";

const Footer = () => {
  return (
   <footer className="border-b border-neutral-900 pb-20">
    <div className='container p-12 flex justify-between'>
        <span><img className="mx-0.5 w-40" src={logo} alt="logo"/></span>
        <p className='text-slate-600'>All rights reserved.</p>
    </div>
    </footer>
  )
}

export default Footer
