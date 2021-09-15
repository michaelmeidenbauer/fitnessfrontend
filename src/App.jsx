import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Activities from './components/Activities';
import Routines from './components/Routines';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/routines" component={Routines} />
          <Route exact path="/routines/me" component={Routines} />

          <Route path="/activities" component={Activities} />

          <Route path="/">
            <header className="App-header">
              <h1>JASON AND MICHAEL FUCKING RUUUULE</h1>
            </header>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
