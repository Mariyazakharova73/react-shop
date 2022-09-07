import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      {/* <React.Fragment> */}
        <Header />
        <Main />
        <Footer />
      {/* </React.Fragment> */}
    </div>
  );
}

export default App;
