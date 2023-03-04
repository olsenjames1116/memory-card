import React from 'react';
import Header from './components/header/Header.js';
import Game from './components/game/Game.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <div className="body">
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
