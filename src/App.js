
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Componets/Header/Header';
import Home from './Componets/Home/Home';
import Services from './Componets/Services/Services';
import Contact from './Componets/Contact/Contact';
import NotFound from './Componets/NotFound/NotFound';
import About from './Componets/About/About';
import Footer from './Componets/Footer/Footer';


function App() {
  return (
    <div>
    
      <Router>
      <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>

          </Route>
       
          <Route path="/home">
            <Home></Home>

          </Route>
          <Route path="/about">
            <About></About>

          </Route>
          <Route path="/services">
            <Services></Services>

          </Route>
          <Route path="/contact">
            <Contact></Contact>

          </Route>
          <Route path="*">
            <NotFound></NotFound>

          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
