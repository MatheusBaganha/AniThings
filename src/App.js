import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Procurar from './Components/Procurar';
import Frases from './Components/Frases';
import Header from './Components/Header';
import Populares from './Components/Populares';
import Footer from './Components/Footer';
import Home from './Components/Home';
import AnimeEncontrado from './Components/AnimeEncontrado';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/procurar" end element={<Procurar />} />
        <Route path="/procurar/:animeId" element={<AnimeEncontrado />} />
        <Route path="/frases" element={<Frases />} />
        <Route path="/populares" element={<Populares />} />
        <Route
          path="/*"
          element={<div>Não encontrada. Pagina temporaria</div>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
