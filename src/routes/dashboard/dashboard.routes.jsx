
import { useEffect, useState } from 'react'
import Coin from '../../Components/coin-list/coin-list.components'
import axios from 'axios'
import './dashboard.styles.css'
const Dashboard = () => {
    const [ coins, setCoins ] = useState([]);
    const [ search, setSearch ] = useState('');
    useEffect(()=>{
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then((res) =>{
        setCoins(res.data);
      })
      .catch(error => console.log(error));
    }, []);
  
    const handleChange = e => {
      setSearch(e.target.value);
    };
    
    const filteredCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(search.toLowerCase())
      ); 
    return (
        <div className="dashboard-content">
            <div className="coin-search">
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
            })}
        </div>
    )
}

export default Dashboard