import React from 'react';

import './App.css';

import EventsPage from "./components/EventsPage"
import firebase from "firebase/app";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return (
      <div className="page">
        <EventsPage />
      </div>
    );
  }
}

export default App;