import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import { useContext } from 'react';

import FavoritesContext from '../../store/favorites-context';
import classes from './MainNavigation.module.css';
import Search from '../Items/Search';



const Navbar = () => {

    const favoritesCtx = useContext(FavoritesContext)
  return (      
      <>
       <Nav>
           <NavLink to="/">
                <img src = {require('../../Images/logo.png')} alt = "Logo"/>
           </NavLink>
           <Bars/>
           <Search/>
           <NavMenu>
               
           <NavLink to ="/" activeStyle>
                   Home
               </NavLink>
               <NavLink to ="/Profile" activeStyle>
                   Profile
               </NavLink>
               <NavLink to ="/Favorites" activeStyle>
                   Favorites
                   <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
               </NavLink>
               <NavLink to ="/NewItem" activeStyle>
                   New Item
               </NavLink>
               <NavLink to ="/About" activeStyle>
                   About
               </NavLink>
               <NavLink to ="/Contact" activeStyle>
                   Contact
               </NavLink>
           </NavMenu>
           <NavBtn>
               <NavBtnLink to='/SignInButton'>
                    Sign In
               </NavBtnLink>
           </NavBtn>
       </Nav>
       </>
  );
};

export default Navbar;