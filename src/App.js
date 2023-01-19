import './App.css';
import BernatQiLogo from './img/bernatqi-logo.png';

function App() {
  return (
    <div className='App'>
      <div className='bernatqi-logo-container'>
        <img
          src={BernatQiLogo}
          className='bernatqi-logo'
          alt='Logo BernatQi' />
        <div className='calculator-container'>

        </div>
      </div>
    </div>
  );
}

export default App;
