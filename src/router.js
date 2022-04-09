import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { get as _get } from 'lodash';
import { shallowEqual, useSelector } from 'react-redux';
import { injectIntl } from 'react-intl';
// import { reactIntl } from '@cvme/lib/helpers/i18n'
import ErrorBoundary from './ErrorBoundary';
import Loader from 'utility/Loader';

const Login = lazy(() => import('./containers/Auth/Login'))
const SignUp = lazy(() => import('./containers/Auth/SignUp'))
const Network = lazy(() => import('./containers/Network'));
const Home = lazy(() => import('./containers/Home'));

function PrivateRoute() {
  const location = useLocation();
  const User = useSelector((state) => state.User || {}, shallowEqual);
  const isLoggedIn = _get(User, 'token', false);
  const isProfileComplete =
    _get(User, 'user.user_register') === 'user'
      ? _get(User, 'user.education', false)
      : _get(User, 'user.organization', false);
  // console.log({ User });
  return <Outlet />;
  // if (isLoggedIn && isProfileComplete) {
  //   return <Outlet />;
  // }
  // if (!isLoggedIn && !isProfileComplete) {
  //   return (
  //     <Navigate
  //       to={{
  //         pathname: '/signin',
  //         state: { from: location },
  //       }}
  //     />
  //   );
  // }
  // if (isLoggedIn && !isProfileComplete) {
  //   // console.log({ amr: 3 })
  //   return (
  //     <Navigate
  //       to={{
  //         pathname: '/complete-register',
  //         state: { from: location },
  //       }}
  //     />
  //   );
  // }
  // return null;
}

function AllRoutes(props) {
  // reactIntl.injectIntl(props.intl)

  const User = useSelector((state) => state.User || {}, shallowEqual);
  const isLoggedIn = _get(User, 'token', false);
  const isProfileComplete =
    _get(User, 'user.user_register') === 'user'
      ? _get(User, 'user.education', false)
      : _get(User, 'user.organization', false);

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/network'
                element={<Network />}
              />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
export default injectIntl(AllRoutes);
