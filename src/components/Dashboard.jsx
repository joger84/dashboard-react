import React from 'react'
import NavLeft from './NavLeft'
import '../assets/css/app.css'
import ContentWrapper from './ContentWrapper'



const Dashboard = () => {
  return (
    <>
    <div id="wrapper">
      <NavLeft />
      <ContentWrapper />
    </div>  
        
    </>
  )
}

export default Dashboard