import React, { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('products.json').then((res)=>res.json()).then(data=>console.log(data))
  },[])
  return (
    <div className='max-w-7xl px-5 mx-auto'>Home</div>
  )
}
