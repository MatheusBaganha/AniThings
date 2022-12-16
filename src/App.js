import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Procurar from './Components/Procurar';
import AnimeEncontrado from './Components/AnimeEncontrado';
import Frases from './Components/Frases';
import Header from './Components/Header';
import Populares from './Components/Populares';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { ContextBuscarFrases } from './Context/ContextBuscarFrases';
import { ContextEncontrarAnime } from './Context/ContextEncontrarAnime';
//TESTEE
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<ContextEncontrarAnime />}>
          <Route path="/" end element={<Home />} />
          <Route path="/procurar" element={<Procurar />} />
          <Route path="/animeEncontrado" element={<AnimeEncontrado />} />
        </Route>
        <Route element={<ContextBuscarFrases />}>
          <Route path="/frases" element={<Frases />} />
        </Route>
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
