import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Encontrar from './Encontrar';
import Frases from './Frases';
import Header from './Header';
import Populares from './Populares';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Encontrar/>}/>
        <Route path='/Frases' element={<Frases/>}/>
        <Route path='/Populares' element={<Populares/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
