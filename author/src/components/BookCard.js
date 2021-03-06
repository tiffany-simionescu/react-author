import React, { Component } from 'react';
import { 
  Card, 
  CardText,
  CardTitle,
  CardActions,
  CardMenu,
  Button,
  IconButton
 } from 'react-mdl';
import '../App.css';

class BookCard extends Component {
  render() {
    return (
      <Card shadow={5} style={{ minWidth: '450', margin: 'auto', marginTop: '450px' }}>
            <CardTitle className="card-title" style={{ color: '#fff', maxHeight: '276px', background: `url(${this.props.url}) center / cover` }}>
            <CardActions style={{height: '52px', padding: '16px', marginTop: '200px', fontSize: '20px', textAlign: 'center', background: 'rgba(0,0,0,0.5)'}}>
              {this.props.cardTitle}
              </CardActions>
            </CardTitle>  
            <CardText>
              {this.props.cardText}
            </CardText>
            <CardActions border className="bookcard-button">
              <Button colored>
                {this.props.buttonText}
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
      </Card>
    )
  }
}

export default BookCard;