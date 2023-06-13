import React from 'react'
import {Typography,Avatar} from 'antd';
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div className="nav-container">
      <div className='logo-container'>
      <Typography.Title level={2} className="logo">
        <Link to ="/">Cryptoverse</Link>
      </Typography.Title>
      </div>
    </div>
  )
}

export default Navbar
