import './Navbar.scss'
import {BiSearch} from 'react-icons/bi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {IoMdArrowDropdown} from 'react-icons/io'
import { useState } from 'react'
function Navbar(){
    const [isScrolled,setisScrolled]=useState(false)
    window.onscroll=()=>{
        setisScrolled(window.pageYOffset===0 ? false:true)
        return () => (window.onscroll = null);
    }
    return(
        <nav className={isScrolled ? 'navbar scrolled':'navbar'}>
            <div className='container'>
                  <div className='left'>
                     <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'/>
                     <ul>
                        <li>Homepage</li>
                        <li>Series</li>
                        <li>Movies</li>
                        <li>New And Popular</li>
                        <li>My list</li>
                     </ul>
                  </div>
                  <div className='right'>
                    <BiSearch className='icon'/>
                    <span>KID</span>
                    <IoIosNotificationsOutline className='icon'/>
                    <img
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className='profile'>
                        <IoMdArrowDropdown className='icon'/>
                        <div className="options">
                          <span>Settings</span>
                          <span>Logout</span>
                        </div>
                    </div>
                  </div>
            </div>
        </nav>
    )
}
export default Navbar