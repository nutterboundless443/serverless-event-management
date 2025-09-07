import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CreateEvent from './components/CreateEvent';
import EventList from './components/EventList';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create-event" component={CreateEvent} />
        <Route path="/events" component={EventList} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
