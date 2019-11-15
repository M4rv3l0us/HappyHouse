import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Home from './components/Home'
import './index.css';
import Details from './components/Details'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// function Routes(){
//     return (
//         <BrowserRouter>
//             <div>
//                 <Switch>
//                     <Route path="/" component = {Home}>
//                         <Redirect from = '/' to='/details/'/>
//                         <Route path = "/details" component ={Details}/>
//                     </Route>
//                 </Switch>
//             </div>
//         </BrowserRouter>
//     )
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
