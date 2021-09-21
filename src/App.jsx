import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Activities from './components/Activities';
import Routines from './components/Routines';
import AddActivity from './components/AddActivity';
import LoginRegister from './components/LoginRegister';
import ActivityPage from './components/ActivityPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/routines" component={Routines} />
          <Route exact path="/routines/me" component={Routines} />

          <Route exact path="/activities" component={Activities} />
          <Route exact path="/activities/new" component={AddActivity} />
          <Route exact path="/activities/:activityId" component={ActivityPage} />

          <Route path="/login" component={LoginRegister} />

          <Route path="/">
            <header className="App-header">
              <h1>JANKY-ASS STRAVA</h1>
            </header>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
