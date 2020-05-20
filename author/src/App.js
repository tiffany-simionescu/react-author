import React from 'react';
import './App.css';
import Nav from './components/Nav';
import ThreeBookList from './components/ThreeBookList';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="App">
      <Nav />
      <ThreeBookList />
      <MyFooter />
    </div>
  );
}

export default App;
