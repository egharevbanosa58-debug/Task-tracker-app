"use client"

import React from 'react'
import './styles.css'

//Component imports
import Header from './components/Header'
import Input from './components/Input'


const page = () => {
  return (
    <div className='body'>
      <Header/>
      <Input/>
    </div>
  )
}

export default page
