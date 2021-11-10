import React from 'react';
import Component from './component';

function App(): JSX.Element {
  const props = {
    style: {},
    alt: 'foo',
  };

  return (
    <div className="App" {...props}>
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Component />
    </div>
  );
}

export default App;
