import * as React from 'react';
import { Helmet } from 'react-helmet';

export const Home: React.StatelessComponent<{}> = (props) => {
  return (
    <div className="container">
    <Helmet>
        <title>Home</title>
    </Helmet>
    <section className="section">
      <h1 className="title">Home</h1>

      <div className="content">
        <ul>
          <li>TypeScript</li>
          <li>Bulma</li>
          <li>CSS Modules</li>
          <li>SASS</li>
          <li>Helmet</li>
          <li>React Router</li>
          <li>HTTPS</li>
        </ul>
      </div>
      </section>
    </div>
  );
}