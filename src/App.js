import React from 'react';
import Main from './components/Main'
import UserData from './components/UserData'
import {Provider} from 'react-redux'
import store from './Redux/store'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Switch> 
        <div className="App">
          <Route path="/" exact >
            <Main />
          </Route>
          <Route path="/data" exact >
           <UserData />
          </Route>  
            
        </div>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
