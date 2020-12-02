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

            <Route path="/servicios">
              <h1 className="text-center">
                Esta es la página de Services
              </h1>
            </Route>

            <Route path="/productos" exact>
              <h1 className="text-center">
                Esta es la página de Products
              </h1>
            </Route>

            <Route path="/producto">
              <h1 className="text-center">Single product</h1>
            </Route>

            <Route path="/mi-cuenta">
              <h1 className="text-center">My Count</h1>
            </Route>

            <Route path="/carrito">
              <h1 className="text-center">Cart</h1>
            </Route>

            <Route path="/iniciar">
              <Login />
            </Route>

            <Route path="/registrar">
              <Register />
            </Route>

            <Route path="/busqueda">
              <Search />
            </Route>

            <Route path="/recuperar-contrasena">
              <Search />
            </Route>

          </Switch>

      </Fragment>
      </Router>
    );
  }
}

export default App;
