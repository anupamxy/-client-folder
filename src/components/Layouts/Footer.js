import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <h5 className='text-center'> 
      ALL RIGHT RESERVED MADE WITH LOVE ❤
      </h5>
      <p className='text-center mt-3'>
      <Link to="/about">About</Link>
      <Link to="/contact">contact us</Link>
      <Link to="/policy">About Creator </Link>
      </p>
    </div>
  )
}

export default Footer
