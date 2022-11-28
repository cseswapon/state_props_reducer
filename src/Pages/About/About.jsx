import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function About() {
  // const { id } = useParams();
  const navigation = useNavigate()
  // console.log(navigation);
  return (
    <>
      {navigation.state === "loading" && <h1>loading...</h1>}
      <div className="max-w-7xl px-5 mx-auto">About</div>
    </>
  );
}
