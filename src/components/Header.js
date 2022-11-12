import React from 'react';

import '../styles/header.css';
// import Logo from '../assets/Grow_Logo.jpg';

function Header() {
  return (
    <div className="home_header">
      <div className="header_left">
        <div className="logo">
          <img src={require('./assets/logo.jpg')} />
          <strong>
            <span style={{ color: '#6c60fe' }}>Grow</span>binar.
          </strong>
        </div>
      </div>

      <ul className="">
        <li>
          <a>
            <strong>Home</strong>
            <hr />
          </a>
        </li>
        <li>
          <a>
            <strong>Features</strong>
            <hr />
          </a>
        </li>
        <li>
          <a>
            <strong>Contact</strong>
            <hr />
          </a>
        </li>
        <li>
          <a>
            <strong>About Us</strong>
            <hr />
          </a>
        </li>
      </ul>

      <div className="header_right">
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Header;
