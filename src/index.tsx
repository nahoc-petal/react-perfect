import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './global.scss?raw';
import registerServiceWorker from './registerServiceWorker';
import { AppRouter } from './router';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
