import React from 'react';

import './App.css';

import Board from './components/Board'

class App extends React.Component {

  render() {
    return (
      <div className="app-container container text-center">
        <h1>Memory Sistemas Operativos 2</h1>
        <Board></Board>
        <div className='row justify-content-end'>
          <div className='col-2 my-3 version-container'>Version 1.0 Beta</div>
        </div>
      </div>
    )
  }
}

export default App;
