import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';

// Mientras se está cargando el componente hay que mostrar algo, y tenemos que decirle a React qué es ese algo
// Es lo que se llama el Suspense con su fallback

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ path, name }) => (
                <li key={path}>
                  <NavLink to={path} activeClassName="nav-active" exact>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Switch>
            {routes.map(({ path, component: Component }) => (
              // <Route key={path} path={path}>{Component}</Route>
              <Route key={path} path={path} render={() => <Component />} />
            ))}

            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};
