import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// custom components
import SearchPage from './components/SearchPage/SearchPage';
import MovieDetailPage from './components/MovieDetailPage/MovieDetailPage';

// styles
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie search DB</h1>
        </header>
        <div className="content">
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/movie/:id" component={MovieDetailPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
