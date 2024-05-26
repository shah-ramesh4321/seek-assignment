import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountryList from './components/home/CountryList'
import Header from './components/navbar/Header'
import Filter from './components/filters/Filter'
import Layout from './components/layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import CountryDetails from './components/countryDetails/CountryDetails'
import { ThemeContext } from './Theme'

function App() {
  const [count, setCount] = useState(0);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
