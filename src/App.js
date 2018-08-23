import React, { Component } from 'react';
import { Route } from "react-router";
import { ProductListContainer } from './components/ProductListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Ecommerce</header>
        <Route path="/" component={ProductListContainer} />
      </div>
    );
  }
}

export default App;
