import React from 'react';
import '../App.css';
import { Header, Navigation } from 'react-mdl';

function Nav() {
  return (
    <div className="nav">
      <h1 className="name">Krystal Owens</h1>
      <Header className="nav-header" style={{ background: '#6C4C81' }}>
        <Navigation style={{ margin: '0 auto' }}>
          <a href="http://google.com">Home</a>
          <a href="http://google.com">About</a>
          <a href="http://google.com">Novels</a>
          <a href="http://google.com">Blog</a>
          <a href="http://google.com">Contact</a>
          <a href="http://google.com">Store</a>
        </Navigation>
      </Header>
    </div>
  )
}

export default Nav;