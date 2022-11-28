import React from 'react'
import { useProductProvider } from '../../hooks/useProductProvider'

export default function Home() {
  const data = useProductProvider();
  console.log(data);
  return (
    <div className='max-w-7xl px-5 mx-auto'>Home</div>
  )
}
