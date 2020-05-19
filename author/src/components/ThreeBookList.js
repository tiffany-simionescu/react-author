import React, { Component } from 'react';
import BookCard from './BookCard';
import { Button } from 'react-mdl';
import '../App.css';

class ThreeBookList extends Component {
  render() {
    return (
      <div>
        <div className="three-book-list">
          <BookCard
            cardTitle="Book Number One"
            cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mi at lacus tempus sodales. Praesent placerat in risus a facilisis. Phasellus a lectus quis ex aliquam mattis. Ut est magna, pretium in ullamcorper non, mattis a massa. Praesent at tempor dolor, ornare elementum erat. Ut libero turpis, vestibulum at."
            buttonText="Amazon"
          />
          <BookCard
            cardTitle="Book Number Two"
            cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mi at lacus tempus sodales. Praesent placerat in risus a facilisis. Phasellus a lectus quis ex aliquam mattis. Ut est magna, pretium in ullamcorper non, mattis a massa. Praesent at tempor dolor, ornare elementum erat. Ut libero turpis, vestibulum at."
            buttonText="Google"
          />
          <BookCard
            cardTitle="Book Number Three"
            cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus mi at lacus tempus sodales. Praesent placerat in risus a facilisis. Phasellus a lectus quis ex aliquam mattis. Ut est magna, pretium in ullamcorper non, mattis a massa. Praesent at tempor dolor, ornare elementum erat. Ut libero turpis, vestibulum at."
            buttonText="Apple"
          />
        </div>
        <div className="three-book-list-button">
          <Button>
            View More Titles
          </Button>
        </div>
    </div>
    )
  }
}

export default ThreeBookList;