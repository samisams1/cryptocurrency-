import { Layout, Space, Typography } from "antd";
import React from "react";
import {Routes,Route, Link} from 'react-router-dom';
import { Navbar,HomePage, Cryptocurrencies, News, Exchanges, CryptoDetails } from "./components";
import './App.css';
const App =()=>{
    return (
       <div className="app">
           <div className="navbar">
<Navbar/>
           </div>
           <div className="main">
            <Layout>
                <div className="routes">
                    <Routes> <Route element={<HomePage/>} path="/" /> </Routes>
                    <Routes> <Route element={<Cryptocurrencies/>} path="/cryptocurrencies" /> </Routes>
                    <Routes> <Route element={<CryptoDetails/>} path="/crypto/:coinId" /> </Routes>
                    <Routes> <Route element={<Exchanges/>} path="/exchanges" /> </Routes>
                    <Routes> <Route element={<News/>} path="/news" /> </Routes>

                </div>
            </Layout>
           
            <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2023
          <Link to="/">
  <span style={{color:"green"}}> Developed</span>  <span style={{color:"yellow"}}>by</span><span style={{color:"red"}}>samsonmamushet3@gmail.com </span> 
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
  </div>  
       </div>
    )
}
export default App;