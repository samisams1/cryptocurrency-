import { Col, Row, Statistic, Typography } from 'antd'
import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from 'millify'
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import { Link } from 'react-router-dom';
const { Title} =Typography;
function HomePage() {
  const {data,isFetching} = useGetCryptosQuery();
  const globalStatus =data?.data?.stats;
  console.log("data");
  console.log(data);
  if(isFetching) return 'Loading...';
  return (
    <div>
      <>
      <Title level={2} className="heading">Global Crypto Statistic</Title>
    <Row>   
    <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(globalStatus.total)}></Statistic></Col>
    <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStatus.totalExchanges)}></Statistic></Col>
    <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStatus.totalMarketCap)}></Statistic></Col>
    <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStatus.total24hVolume)}></Statistic></Col>
    <Col span={12}><Statistic title="Total Markets" value={millify(globalStatus.totalMarkets)}></Statistic></Col>
    </Row>
    <div className='home-heading-container'>
      <Title level={2} className ="home-title">Top 10 Cryptocurrencies in the world</Title>
      <Title level={2} className ="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
    </div>
    <Cryptocurrencies />
    <div className='home-heading-container'>
      <Title level={2} className ="home-title">Latest Crypto News</Title>
      <Title level={2} className ="show-more"><Link to="/news">Show More</Link></Title>
    </div>
    <News />
      </>
    </div>
  )
}

export default HomePage
