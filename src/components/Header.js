import React, { useState } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import {FaUserCircle} from "react-icons/fa";
import {Link} from 'react-router-dom'
import './css/Header.css'
//import { DataContext } from '../App';


function Header() {
    //const {cart} = useContext(DataContext)
    const [toggle,setToggle] = useState(false)
    return (
        <header>
          <div className='menu' onClick={()=> setToggle(!toggle)} >
           <img src={Menu} alt='menu'  width='20' />
          </div>
          <div className='logo'>
           <h1><Link to='/'><span>Near</span> Deal</Link></h1>
          </div>
          <nav>
            <ul onClick={()=> setToggle(false)} className={toggle ? 'toggle' : ''}>
               <li><Link  to='/'>Home</Link></li>
               <li><Link  to='/products'>Categories</Link></li>
               <li><Link  to='/about'>About</Link></li>
               <li><Link  to='/shops'>Shops</Link></li>
               <li><Link  to='/payment'>Products</Link></li>
               <li className='close' onClick={()=> setToggle(!toggle)}>
                 <img src={Close} alt='close'  width='20' />
               </li>
            </ul>
            <div className='nav-cart'>
              <Link to='/cart'>
                <FaUserCircle className='header-icon' />
              </Link>
            </div>
          </nav>
        </header>
    )
}

export default Header
