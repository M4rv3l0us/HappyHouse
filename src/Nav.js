import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import logo from './img/big-shovel.svg';
import { NONAME } from 'dns';
class Nav extends React.Component {
  render() {
    const navStyle = {
      color: 'white',
    }
    const imageClick = () => {
      console.log("CLICK !!!!")
    }
    const imgStyle = {
      height: '70px',
      width: '70px',
      margin: '10px',
    }
    return (
      <nav className='nav'>
        <img src={logo} onClick={() => imageClick()} alt="/" style={imgStyle} />
        <ul className="nav-links">
            <Link to='/' style={navStyle}>
              <li>Home</li>
            </Link>
            <Link to='/about' style={navStyle}>
              <li>About</li>
            </Link>
            <Link to='/contact' style={navStyle}>
              <li>Contact</li>
            </Link>
            <Link to='/login' style={navStyle}>
              <li>Login</li>
            </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
