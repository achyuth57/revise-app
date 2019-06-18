import React from 'react';
import './App.css';
import Header from './components/Header'
import Movies from './components/movie/Movies'
import FireBaseLogin from './fire-auth'

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
      <Header title={this.state.title} />
      <div className="container">
        {/* <Movies /> */}
        <FireBaseLogin />

      </div>
    </div>
  );
  }
}

export default App;
