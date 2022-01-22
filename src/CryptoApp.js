import './App.css';
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
          <Route exact path='/articles' element={<News/>}/>
        </Routes>
      </div>
    );
}

export default CryptoApp;