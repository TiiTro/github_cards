import React, { Component } from 'react';
import CardList from './Components/CardList';
import Form from './Components/Form';
// import './App.css';

class App extends Component {
  // The data needs to be in the App, so that both CardList and the Form can access it
  state = {
    cards : [
      {name:"Paul O’Shannessy",
      avatar_url:"https://avatars1.githubusercontent.com/u/8445?v=4",
      company:"Facebook"}, 
      {name:"Sophie Alpert",
      avatar_url:"https://avatars2.githubusercontent.com/u/6820?v=4",
      company:"Facebook"}, 
    ]
  };

  addNewCard = (cardInfo) => {
    console.log(cardInfo);
  }
  
  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
