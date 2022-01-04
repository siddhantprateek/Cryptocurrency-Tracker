import './App.css';
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
import './App.css';
// import Coin from './Components/coin-list/coin-list.components';
import { Header } from './Components/header/header.component';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './routes/dashboard/dashboard.routes';
import News from './routes/news/news.routes';
const CryptoApp = () => {
    return (
      <div className="Coin-App">
        <Header/>
        <Routes>
          <Route exact path='/' element={<Dashboard/>}/>
          <Route exact path='/news' element={<News/>}/>
        </Routes>
      </div>
    );
}

export default CryptoApp;