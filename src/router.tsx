import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About, Footer, Header, Home } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route component={Header} />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);