import React from 'react'; 
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import Home from './components/Pages/Home'; 
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
   <>
    <Router>
       <Navbar />
       <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/services' exact component={Services} />
         <Route path='/products' exact component={Products} />
         <Route path='/sign-up' exact component={SignUp} />

       </Switch>
    </Router>
   </>
  );
}
 
export default App;



 