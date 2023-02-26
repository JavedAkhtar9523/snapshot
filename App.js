// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Gallery from "./component/Gallery";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Header from "./component/header";
import { GalleryProvider } from "./context/GalleryContext";
import Search from "./component/Search";

const App = () => {
  return (
    <GalleryProvider>
      <Router>
        <Header/>
        <Switch>
        <Route exact path="/" component={Gallery}/>
        <Route path="/mountains" render={<Gallery category="mountains"/>}/>
        <Route path="/beaches" render={<Gallery category="beaches"/>}/>
        <Route path="/birds" render={<Gallery category="birds"/>}/>
        <Route path="/food" render={<Gallery category="food"/>}/>
        <Route path="/search" component={Search}/>
        </Switch>
      </Router>

    </GalleryProvider>

  )
}

export default App;
