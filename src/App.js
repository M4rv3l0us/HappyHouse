import React from 'react';
import './App.css';
import ItemPage from './components/ItemPage'
import About from './components/About'
import Contact from './components/Contact'
import Nav from './Nav'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'   
import Details from './components/Details';

class App extends React.Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <Router>
      <div className="App">
        <Nav/> 
        <Switch>
           <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={SignUp}/>
          {/* <Route path='/details'component={Details}/> */}
          <Route path='/details/:title' exact component={Details} />
        </Switch>
       
      </div>
    </Router>
    );
  }
}

export default App;
