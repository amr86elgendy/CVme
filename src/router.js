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
import Layout from 'layout';
import ErrorBoundary from './ErrorBoundary';
import Loader from 'utility/Loader';
import PendingReqsRoute from 'containers/Network/PendingReqsRoute';
import MyNetworkRoute from 'containers/Network/MyNetworkRoute';
import LandingPage from 'containers/Network/components/networkLandingPage';
import PeopleYMKRoute from 'containers/Network/PeopleYMKRoute';
import PeopleInSameIndustryRoute from 'containers/Network/PeopleSameIndstryRoute';
import RecommendCompsRoute from 'containers/Network/RecommendCompsRoute';
import Error from 'containers/ErrorPage'
import CompsIFollow from 'containers/Network/CompsIFollowRoute';

const Login = lazy(() => import('./containers/Auth/login'));
const SignUp = lazy(() => import('./containers/Auth/signup'));
const Network = lazy(() => import('./containers/Network'));
const Home = lazy(() => import('./containers/Home'));

function PrivateRoute({ children }) {
  const location = useLocation();
  const User = useSelector((state) => state.User || {}, shallowEqual);
  const isLoggedIn = _get(User, 'token', false);
  const isProfileComplete =
    _get(User, 'user.user_register') === 'user'
      ? _get(User, 'user.education', false)
      : _get(User, 'user.organization', false);
  // console.log({ User });
  return children;
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
            <Route
              path='/'
              element={
                <PrivateRoute>
                  <Layout />
                </PrivateRoute>
              }
            >
              <Route index element={<Home />} />
              <Route path='network' element={<Network />}>
                <Route index element={<LandingPage />} />
                <Route path='pending-requests' element={<PendingReqsRoute />} />
                <Route path='my-network' element={<MyNetworkRoute />} />
                <Route
                  path='people-in-same-industry'
                  element={<PeopleInSameIndustryRoute />}
                />
                <Route
                  path='people-you-may-know'
                  element={<PeopleYMKRoute />}
                />
                <Route
                  path='companies-to-follow'
                  element={<RecommendCompsRoute />}
                />
                <Route
                  path='companies-i-follow'
                  element={<CompsIFollow />}
                />
              </Route>
            </Route>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<Login />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
export default injectIntl(AllRoutes);
