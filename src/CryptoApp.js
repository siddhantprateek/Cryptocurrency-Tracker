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

    // const [ coins, setCoins ] = useState([]);
    // const [ search, setSearch ] = useState('');
    // useEffect(()=>{
    //   axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    //   .then((res) =>{
    //     setCoins(res.data);
    //     console.log(res.data);
    //   })
    //   .catch(error => console.log(error));
    // }, []);
  
    // const handleChange = e => {
    //   setSearch(e.target.value);
    // };
    
    // const filteredCoins = coins.filter(coin => 
    //   coin.name.toLowerCase().includes(search.toLowerCase())
    //   ); 
    
    return (
      <div className="Coin-App">
        <Header/>
        <Routes>
          <Route exact path='/' element={<Dashboard/>}/>
          <Route exact path='/news' element={<News/>}/>
        </Routes>
        {/* <div className="coin-search">
          <h1 className="coin-text">Search Currency</h1>
          <form>
            <input type='text'
            placeholder='search here'
            onChange={handleChange}
            className='coin-input'/>
          </form>
        </div>
        {filteredCoins.map((coin) => {
          return(
            
            <Coin
              key={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              marketcap ={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          )
        })} */}
      </div>
    );
}

export default CryptoApp;