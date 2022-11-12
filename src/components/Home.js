import React from 'react';

import '../styles/home.css';

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="header_left">
          <div className="logo">
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

      <div className="home_body"></div>

      <div className="footer"></div>
    </div>
  );
}

export default Home;
