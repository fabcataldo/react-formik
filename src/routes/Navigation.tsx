import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import logo from '../logo.svg';
import {
  RegisterPage,
  FormikBasicPage,
  FormikYupPage,
  FormikComponentsPage,
  FormikAbstractionPage
} from '../03-forms/pages';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstraction" activeClassName="nav-active" exact>Formik abstraction</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="nav-active" exact>Users</NavLink>
            </li>

            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Register">
            <RegisterPage></RegisterPage>
          </Route>
          <Route path="/formik-basic">
            <FormikBasicPage></FormikBasicPage>
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage></FormikYupPage>
          </Route>
          <Route path="/formik-components">
            <FormikComponentsPage></FormikComponentsPage>
          </Route>
          <Route path="/formik-abstraction">
            <FormikAbstractionPage></FormikAbstractionPage>
          </Route>
          
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}