import React from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const   News =({simplified})=> {
  const {data:cryptoNews}=useGetCryptoNewsQuery({newsCategory:'Cryptocurrency',count:5});
  console.log(cryptoNews)
  if(!cryptoNews?.value) return 'Loading ...';
  
  return (
    <div>
      
    </div>
  )
}

export default News
