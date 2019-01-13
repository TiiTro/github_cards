import React, { Component } from 'react';
import axios from 'axios';
// import CardList from './Components/CardList';
// import './App.css';

const Card = (props) => {
  return (
      <div style={{margin: '1em'}}>
          <img width="75" alt="" src={props.avatar_url} />
          <div style={{display: 'inline-block', marginLeft: 10, fontFamily: 'sans-serif', position: "absolute"}}>
              <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
              <div>{props.company}</div>
          </div>
      </div>
  );
};

const CardList = (props) => {
  return( 
    <div>
      {props.cards.map(card => <Card key={card.id} {...card}/>)}
    </div>
  )
};

class Form extends React.Component {
  state = { userName: ""}
  handleSubmit = (event) => {
    event.preventDefault(); // prevents the default submission logic such as refreshing the page
    axios.get('https://api.github.com/users/${this.state.userName}')
      .then(resp => {
        console.log(resp);
        this.props.onSubmit(resp.data);
        this.setState({ userName: "" });
      });
  };
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
        value={this.state.userName}
        onChange={(event) => this.setState({ userName: event.target.value})}
        placeholder="Github username" 
        required />
        <button type="submit">Add card</button>
      </form>
    );
  }
};

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
