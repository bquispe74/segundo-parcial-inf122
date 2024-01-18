
import './App.css';
import { useState } from 'react';
import Contador from './components/Contador';
import ListaMetas from './components/LiMeta';

function App() {
  
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1 className='titulo'>Mis metas</h1>
        <LiMeta />
        
      </div>
    </div>
  );
}

export default App;