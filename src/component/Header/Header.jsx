import React from 'react';
import './Header.css'
import logo from '../../../public/images/Logo.svg'

const Header = () => {
               return (
                              <nav className='header'>
                 <img src={logo} alt="" />  
               
 <div>

       <a href="/home">Oder</a>
       <a href="/about">Oder Review</a>
       <a href="/inventory">Inventory</a>
       <a href="/login">Login</a>  
                   
                </div>   
                      
                              </nav>
                            


               );
};

export default Header;