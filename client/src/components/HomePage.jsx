import { Col, Row, Statistic, Typography } from 'antd'
import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi';
const { Title} =Typography;
function HomePage() {
  const {data,isFetching} = useGetCryptosQuery();
  console.log("data");
  console.log(data);
  return (
    <div>
      <>
      <Title level={2} className="heading">Global Crypto Statistic</Title>
    <Row>
      <Col span={12}><Statistic title="Total Cryptocurrencey" value="5"></Statistic></Col>
      <Col span={12}><Statistic title="Total Exchange" value="5"></Statistic></Col>
      <Col span={12}><Statistic title="Total Markket Cap" value="5"></Statistic></Col>
      <Col span={12}><Statistic title="Total Total 24h volume" value="5"></Statistic></Col>
      <Col span={12}><Statistic title="Total Markets" value="5"></Statistic></Col>
    </Row>
      </>
    </div>
  )
}

export default HomePage
