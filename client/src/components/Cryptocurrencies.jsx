import { Card, Col, Row } from 'antd';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from 'millify';
import Input from 'antd/es/input/Input';
import { useEffect } from 'react';
const Cryptocurrencies=({simplified})=> {
const count = simplified ?10:100;
const {data:cryptoList,isFetching} = useGetCryptosQuery(count);
const [cryptos,setCryptos] = useState([]);
const [searchTerm,setSearchTerm] = useState('');
useEffect(()=>{
const filteredData = cryptoList?.data?.coins.filter((coin)=>coin.name.includes(searchTerm))
setCryptos(filteredData);
},[cryptoList,searchTerm])
if(isFetching) return 'Loading...';
return (
  <>
  {
    (!simplified&&(
      <div className='search-crypto'>
      <Input  placeholder='search ryptocurrency' onChange={(e)=>setSearchTerm(e.target.alue)} />
    </div>
    ))
  }
 
    <Row gutter={[32,32]} className="crypto-card-container">
    {
  cryptos?.map((currency)=>(
    <Col Col xs={24} sm={12} lg ={6} className="crypto-card" key={currency.id}>
    <Link to={ `/crypto/${currency.id}`}>
    <Card title={`${currency.rank}.${currency.name}`}
              extra={<img className="crypto-image" src={currency.iconUrl} />}
              hoverable
              >
                <p>Price:{millify(currency.price)}</p>
                <p>Market Cap:{millify(currency.marketCap)}</p>
                <p>Daily Change:{millify(currency.change)}</p>
    </Card>
    </Link>
    </Col>
  ))
}
    </Row>
  </>
)
}

export default Cryptocurrencies
