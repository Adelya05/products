import React, { Component } from 'react';
import Kupit from './main/UspeyKupit/Kupit';
import New from './main/New/New';
import Shop from './main/ShopForYou/Shop';
import Reacomend from './main/RecomendForYou/Reacomend';
import Slide from './main/Slide/Slide';
import Header from './main/header/header.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this); 
  }

  render() {
    return (
      <div className='App'>
        <Header items={this.state.items} onRemoveFromCart={this.removeFromOrder} />
        <Kupit onAdd={this.addToOrder} />
        <New />
        <Shop />
        <Reacomend />
        <Slide />
      </div>
    );
  }

  addToOrder(item) {
    this.setState(prevState => ({
      items: [...prevState.items, item],
    }));
  }

  removeFromOrder(index) {
    this.setState((prevState) => ({
      items: prevState.items.filter((_, i) => i !== index),
    }));
  }
}

export default App;
