import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import './Header.css';

import logo from './../assets/images/logo.png';

export const Header = () => {
  const cartList = useSelector((state) => state.cartState.cartList);
  return (
    <header>
      <Link to='/' className='logo'>
        <img src={logo} alt='Shopping cart' />
        <span>Shopping Cart Redux</span>
      </Link>
      <nav className='navigation'>
        <NavLink to='/' className='link' end>
          Home
        </NavLink>
        <NavLink to='/cart' className='link'>
          Cart
        </NavLink>
      </nav>
      <Link to='/cart' className='items'>
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  );
};
