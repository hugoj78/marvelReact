import React from 'react'

const Home = () => {
  const token = localStorage.getItem('token')

  return (
    <div>
      <h1>Home Page</h1>
      <p>Token : {token}</p>
    </div>
  )
}

export default Home
