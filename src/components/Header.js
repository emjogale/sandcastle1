import React from 'react';
import logo from '../assets/logo.png';

const Header = ({ countCartItems }) => {
  return (
    <div className="row center block">
      <div className="row">
        <img src={logo} style={{ height: '4rem' }} alt="logo" />
        <h1 className="margin-left">Sandcastle United Club Shop</h1>
      </div>
      <div>
        <a href="#/cart">
          Cart
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin">Sign in</a>
      </div>
    </div>
  );
};

export default Header;
