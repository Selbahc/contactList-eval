import React, { Component } from 'react';
import './App.css';
import ContactLayout from './components/ContactLayout';
import FormContact from './components/FormContact';

import '../node_modules/spectre.css/dist/spectre.min.css';
import '../node_modules/spectre.css/dist/spectre-icons.min.css'


class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3001/listeContact/')
      .then(data => data.json())
      .then(contacts => this.setState({contacts}))
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state &&
            this.state.contacts.map((contact, i) => {
            return <ContactLayout key={i} contact={contact} />
          })}
        </ul>
        
        <form action='http://localhost:3001/listeContact/new' method='post'>
          <FormContact />
        </form>
      </div>
    );
  }
}

export default App;
