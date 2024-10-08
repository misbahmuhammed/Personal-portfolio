import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillAccountBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {AiFillContacts} from 'react-icons/ai'
import {BsPersonWorkspace} from 'react-icons/bs'



const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
   <nav>
    <a href="#" onClick={()=> setActiveNav('#')} className={activeNav ==='#' ? 'active' : ''}><AiOutlineHome/></a>
    <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><AiOutlineUser/></a>
    <a href="#experience" onClick={()=> setActiveNav('#experience')}  className={activeNav ==='#experience' ? 'active' : ''} ><AiFillAccountBook/></a>
    <a href="#services" onClick={()=> setActiveNav('#services')}  className={activeNav ==='#services' ? 'active' : ''}><RiServiceLine/></a>
    <a href="#portfolio"  onClick={()=> setActiveNav('#portfolio')}  className={activeNav ==='#portfolio' ? 'active' : ''}><BsPersonWorkspace/></a>
    
    <a href="#contact"  onClick={()=> setActiveNav('#contact')}  className={activeNav ==='#contact' ? 'active' : ''}><AiFillContacts/></a>
  
   </nav>
  )
}

export default Nav