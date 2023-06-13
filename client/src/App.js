import { Layout } from "antd";
import React from "react";
import {Routes,Route} from 'react-router-dom';
import { Navbar,HomePage, Cryptocurrencies, News, Exchanges } from "./components";
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
                    <Routes> <Route element={<Exchanges/>} path="/exchanges" /> </Routes>
                    <Routes> <Route element={<News/>} path="/news" /> </Routes>

                </div>
            </Layout>
           </div>
           <div className="footer">
  this is footer page
           </div>
       </div>
    )
}
export default App;