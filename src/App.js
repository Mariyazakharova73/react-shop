import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { ContextProvider } from './context.js';

function App() {
  return (
    <React.Fragment>
      <Header />
      <ContextProvider>
        <Main />
      </ContextProvider>
      <Footer />
    </React.Fragment>
  );
}

export default App;
