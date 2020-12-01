import React, {Component, Fragment} from 'react';
import './App.scss';

// React Router DOM
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Imports Components
import NavegationMobile from './components/navegation-mobile/NavegationMobile';

// import Pages
import Home from './pages/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Search from './pages/search/Search';



class App extends Component {
  constructor(){
    super();
    this.state = {
      device: null,
      cart: []
    }
  }

  componentDidMount(){
    // Detected screen of the user
   let screenDetected = () => window.screen.width;
   let resolution = screenDetected();
   let device = resolution > 600 ? 'desktop' : 'mobile';
      
    this.setState({
      device: device
    });
  
   }

  render(){
    


    // Return View
    return (
      <Router>
        <Fragment>
        <NavegationMobile visible="false" />

          {/** Dinamic Content **/}
          <Switch>
            <Route path="/" exact>
              <Home device={this.state.device} />  
            </Route>

            <Route path="/services">
              <h1 className="text-center">
                Esta es la página de Services
              </h1>
            </Route>

            <Route path="/products" exact>
              <h1 className="text-center">
                Esta es la página de Products
              </h1>
            </Route>

            <Route path="/product">
              <h1 className="text-center">Single product</h1>
            </Route>

            <Route path="/mycount">
              <h1 className="text-center">My Count</h1>
            </Route>

            <Route path="/cart">
              <h1 className="text-center">Cart</h1>
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/search">
              <Search />
            </Route>

          </Switch>

      </Fragment>
      </Router>
    );
  }
}

export default App;
