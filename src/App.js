import React from 'react';
import{Header, Footer,Features,WhatGPT3,Blog,Possibility}from './containers';
import {CTA,Brand,Navbar} from './components';
import './App.css';
import './index.css'


const app = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default app
