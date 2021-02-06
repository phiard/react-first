import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from "./components/layout/Header"
import Home from "./components/pages/home/Home"
import Todos from "./components/pages/todos/Todos"



import Randomizer from "./components/pages/randomizer/Randomizer"
import GachaCounter from "./components/pages/gachacounter/Gacha"
import Setting from "./components/pages/setting/Setting"

import './App.css';

class App extends Component{
  state = {
    lastupdate:"",
    route:"",
  }

  lastUpdate = () =>{
    var date = new Date();
    this.setState({lastupdate:date});
  }

  pageChange = (x) =>{
    this.setState({route:x})
  }

  componentDidMount(){
  }

  render() {
    console.log(this.state.todos)
    //<Todos todos={this.state.todos} ></Todos>
    return(
      <Router>
        <div className="App">
          <div className="container">
            
            <Header pageChange={this.pageChange.bind()} page={this.state.route}></Header>

            <div className="content">
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <Home></Home>
                </React.Fragment>
              )} />

              <Route exact path="/todos" render={props => (
                <React.Fragment>
                  <div className="todo">On going...</div>
                </React.Fragment>
              )} />

              <Route exact path="/randomizer" render={props => (
                <React.Fragment>
                  <Randomizer></Randomizer>
                </React.Fragment>
              )} />
              
              <Route exact path="/gacha" render={props => (
                <React.Fragment>
                  <GachaCounter lastUpdate={this.state.lastUpdate} ></GachaCounter>
                </React.Fragment>
              )} />

              <Route path="/setting" component={Setting} />
            </div>
            
          </div>
        </div>
      </Router>
    )
  }
    
}

export default App;
