import * as React from 'react';
import styles from './App.module.scss';

class App extends React.Component {
  public render() {
    return (
      <div className={`container ${styles.app}`}>
        <header>
          <h1 className="title">Welcome to React Perfect</h1>
        </header>
        <p>Supports</p>
        <ul>
          <li>* TypeScript</li>
        </ul>
      </div>
    );
  }
}

export default App;
