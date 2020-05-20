import React from 'react';
import '../App.css';
import { Header, Navigation, Layout, Drawer, Content } from 'react-mdl';

function Nav() {
  return (
    <div style={{ height: '400px', position: 'relative' }}>
      <Layout fixedHeader>
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
      </Layout>
      <div className="nav">
        <h1 className="name">Krystal Owens</h1>
        <img 
          src="https://thewallpaper.co//wp-content/uploads/2016/01/glorious-twilight-wide-desktop-background.jpg"
          style={{ maxHeight: "400px", width: "100%" }}
          alt="background"
        />
      </div>
    </div>
  )
}

export default Nav;