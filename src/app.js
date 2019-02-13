import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar />
        App
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));