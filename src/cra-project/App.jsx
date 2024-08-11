import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Selamat Datang di Aplikasi React Saya</h1>
        <p>
          Ini adalah komponen utama yang akan dirender di index.
        </p>
      </header>
      <main>
        <p>
          Silakan edit <code>src/App.js</code> dan simpan untuk melihat perubahan.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pelajari React
        </a>
      </main>
    </div>
  );
}

export default App;
