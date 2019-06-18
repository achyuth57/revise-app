import React from 'react';
import './App.css';
import Header from './components/Header'
import Movies from './components/movie/Movies'
import Firebase, { FirebaseContext } from './fire-auth/';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title:'Fire Base Authentication'
    }
  }
  render(){

  return (
    <div className="App">
      
      <div className="container">
        {/* <Movies /> */}
        <FirebaseContext.Provider value={new Firebase()}><Header title={this.state.title} /></FirebaseContext.Provider>
       

      </div>
    </div>
  );
  }
}

export default App;
