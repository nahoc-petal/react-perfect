import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </Link>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/"> Home </Link>
            <Link className="navbar-item" to="/about"> About </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}