import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Quote from './components/quote';
import Calculator from './components/calculator';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
