import React from 'react';
import {
  Footer,
  FooterSection,
  FooterLinkList
} from 'react-mdl';

function MyFooter() {
  return(
    <Footer size="mini" style={{ background: '#573E67' }}>
    <FooterSection type="bottom" style={{ margin: '0 auto' }}>
        <FooterLinkList>
                <a href="http://google.com">Home</a>
                <a href="http://google.com">About</a>
                <a href="http://google.com">Novels</a>
                <a href="http://google.com">Blog</a>
                <a href="http://google.com">Contact</a>
                <a href="http://google.com">Store</a>
                <a href="http://google.com">Contact Us</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
  )
}

export default MyFooter;