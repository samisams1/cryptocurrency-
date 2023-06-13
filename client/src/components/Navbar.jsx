import React from 'react'
import {Typography,Avatar, Menu} from 'antd';
import {Link} from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
BulbOutlined,
  FundOutlined,
} from '@ant-design/icons';
function Navbar() {
  return (
    <div className="nav-container">
      <div className='logo-container'>
      <Typography.Title level={2} className="logo">
        <Link to ="/">Cryptoverse</Link>
      </Typography.Title>
      </div>
      <Menu theme="dark">
         <Menu.Item  icon={<HomeOutlined/>}>
          <Link to ='/'>Home</Link>
         </Menu.Item>
         <Menu.Item  icon={<MoneyCollectOutlined/>}>
          <Link to ='/cryptocurrencies'>Cryptocurrencies</Link>
         </Menu.Item>
         <Menu.Item  icon={<BulbOutlined/>}>
          <Link to ='/exchanges'>Exchanges</Link>
         </Menu.Item>
         <Menu.Item  icon={<FundOutlined/>}>
          <Link to ='/news'>News</Link>
         </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar
