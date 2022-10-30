import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Builder from './components/Builder/Builder';
import About from './components/Pages/About';
import {init} from './Web3Client';
import { useState } from 'react';
function App() {

  const [address, setAddress] = useState('Connect Wallet');
  function connect () {
    let a = init();
    a = a.slice(0,5) + '. . . ' + a.slice(-5);
    setAddress(a);
  }

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home con={connect} address={address} />} />
        <Route path="/builder" element={<Builder con={connect} address={address} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
