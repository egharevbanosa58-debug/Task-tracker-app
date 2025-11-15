"use client"

import React from 'react'
import './styles.css'

//Component imports
import Header from './components/Header'
import Input from './components/Input'


const page = () => {
  return (
    <div className='body'>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
      <Header/>
      <Input/>
    </div>
  )
}

export default page
