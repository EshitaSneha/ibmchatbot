import logo from './logo.svg';
import './App.css';
import Bot from './bot'
import Home from "./Home"
import Info from "./Info"
import tips from './tips'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
 import 'react-router-dom';
 import {NavLink as Link , Switch, Route, BrowserRouter} from "react-router-dom";

function App()
{
  return (
   <Switch>
      <Route  exact path="/" component={Home} />
      <Route  exact path="/about" component={Info} />
      <Route  exact path="/tips" component={tips} />
    </Switch>
    
  )
}


export default App;
