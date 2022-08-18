import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Procurar from './Components/Procurar';
import Frases from './Components/Frases';
import Header from './Components/Header';
import Populares from './Components/Populares';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Procurar/>}/>
        <Route path='/Frases' element={<Frases/>}/>
        <Route path='/Populares' element={<Populares/>}/>
        <Route path='/*' element={<div>Não encontrada. Pagina temporaria</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
