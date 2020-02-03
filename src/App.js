import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import HelloWorldFunctional from './components/HelloWorldFuncational';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <HelloWorld name="world" test="blah" />
        {/* <HelloWorldFunctional name="Planet" demo="Yes" title="My Title" /> */}
        <HelloWorldFunctional name="Sun" demo="NO" title="I'm hot" />
      </header>
    </div>
  );
}

export default App;
