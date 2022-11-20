import logo from './logo192.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo512.png" />
        <div>
        <h1> Liquidity Pools</h1>
          <ul>USDC/DAI</ul>
          <ul>USDC/WETH</ul>
        </div>
       
        <h1> Stake and Buy Bonds</h1>
        <a
          className="App-link"
          href="https://explorer.glif.io/tx/0x52a7696fe80b01fb99e7998008fbfe10fa82321b68f71bc500b73f4721febd16/?network=wallaby"
          target="_blank"
          rel="noopener noreferrer"
        >
          Example Bond Token

        </a>
        
        <h2> Bond Marketplace</h2>
        <table>
        <tr>
          <th>issuer</th>
          <th>Bond</th>
          <th>Maturity</th>
          <th>Rates</th>
          <th>APY</th>
          <th>Assets</th>
          <th>Deposit</th>
        </tr>
      </table>

      </header>
    </div>
  );
}

export default App;
