import React from 'react';
import '../App.css';
import { Header, Navigation, Layout } from 'react-mdl';

function Nav() {
  return (
    <div style={{ height: '400px', position: 'relative' }}>
      <Layout fixedHeader style={{ position: 'fixed', top: '0', zIndex: '999' }}>
        <Header className="nav-header" style={{ background: '#4E4950' }}>
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
        <div className="nav-image">
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed rhoncus mi at lacus tempus sodales. Praesent placerat 
            in risus a facilisis. Phasellus a lectus quis ex aliquam
            mattis. Ut est magna, pretium in ullamcorper non, mattis 
            a massa. Praesent at tempor dolor, ornare elementum erat. 
            Ut libero turpis, vestibulum at.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed rhoncus mi at lacus tempus sodales. Praesent placerat 
            in risus a facilisis. Phasellus a lectus quis ex aliquam
            mattis. Ut est magna, pretium in ullamcorper non, mattis 
            a massa. Praesent at tempor dolor, ornare elementum erat. 
            Ut libero turpis, vestibulum at.</h5>

          <div className="tinted-image"></div>
        </div>
      </div>
    </div>
  )
}

export default Nav;