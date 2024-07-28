import React,{useState} from 'react'
import Home from '../pages/Home'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./Layout.css";
import Menus from './Menus';
const Layout = () => {
    const[toggle,setToggle]=useState(true)
    //change toggle
    const handleToggle=()=>{
        setToggle(!toggle)
    }
  return (
    <>
    <div className='sidebar-section flex'>
        <div className={toggle ? ' sidebar-toggle h-screen bg-gray-900 w-56 ' :'sidebar h-screen bg-gray-900 w-24'}>
            <div className='sidebar-toggle-icons flex items-end content-end cursor-pointer'>
                <Menus toggle={toggle}/>
                <p className='bg-orange-400 text-white mt-8' onClick={handleToggle} > 
                    {toggle ? (
                        <MdKeyboardDoubleArrowLeft  size={35}  />
                    ) :(
                       <MdKeyboardDoubleArrowRight  size={35} />
                    )}
                    
                    </p>
            </div>
        </div> 
        <div className='container'>
            <Home/>
        </div>
    </div>
    </>
    
     
  )
}

export default Layout
