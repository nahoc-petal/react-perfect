import * as React from 'react';
import styles from './App.module.css';

class App extends React.Component {
  public render() {
    return (
      <div className={styles.app}>
        <header className="App-header">
          <h1 className="App-title">Welcome to Perfect React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
