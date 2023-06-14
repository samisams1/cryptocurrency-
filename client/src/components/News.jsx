import { Card, Col, Row, Select } from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const   News =({simplified})=> {
const {data:cryptoNews}=useGetCryptoNewsQuery({newsCategory:'Cryptocurrency',count:simplified?10:100});
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
console.log(cryptoNews)
if(!cryptoNews?.value) return 'Loading ...';

return (
  <Row gutter={[24,24]}>

      <Col span ={24}>
        <Select
          showSearch
          className='select-news'
          placeholder="Select a Crypto"
          optionFilterProp='children'
          > </Select>
      </Col>
    

    
      {cryptoNews.value.map((news,i)=>(
        <Col xs={24} sm= {12} lg={8} key={i}>
         <Card hoverable className='news-card'>
          <a>
            <div className='news-image-ontainer'>

                 <Title className='news-title' level={4}>{news.name}</Title>
                 <img src={news?.image.thumbnail?.contentUrl|| demoImage}/>
                
            </div>
            </a>
            <div>
                  {news.description>10?
                 `${ news.description.substring(0,10)} ...`:
                  news.description
                  }
                 </div>
         </Card>
        </Col>
      ))}
  </Row>
)
}

export default News
