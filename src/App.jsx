import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import useAuthListner from './hooks/use-auth-listener';
import UserContext from './context/user';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const NotFound = lazy(() => import('./pages/notfound'));
const Dashboard = lazy(() => import('./pages/dashboard.jsx'));




function App() {
  const { user } = useAuthListner();


  return (
    <UserContext.Provider value={{ user }}>
    <Router>
      <Suspense fallback={<p> loading... </p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} exact/>
          <Route path={ROUTES.SIGN_UP} component={SignUp} exact/>
          <Route path={ROUTES.DASHBOARD} component={Dashboard} exact/>
          <Route component={NotFound}/>

        </Switch>
      </Suspense>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
