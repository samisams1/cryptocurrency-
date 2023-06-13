import { Col, Row, Statistic, Typography } from 'antd'
import React from 'react'
const { Title} =Typography;
function HomePage() {
  return (
    <div>
      <>
      <Title level={2} className="heading">Global Crypto Statistic</Title>
    <Row>
      <Col span={12}><Statistic title="Total Cryptocurrencey"></Statistic></Col>
      <Col span={12}><Statistic title="Total Exchange"></Statistic></Col>
      <Col span={12}><Statistic title="Total Markket Cap"></Statistic></Col>
      <Col span={12}><Statistic title="Total Total 24h volume"></Statistic></Col>
      <Col span={12}><Statistic title="Total Markets"></Statistic></Col>
    </Row>
      </>
    </div>
  )
}

export default HomePage
