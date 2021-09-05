import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from 'containers/PrivateRoute';
import Layout from 'containers/Layout';

const LoginPage = React.lazy(() => import('pages/Login/index'));
const AllPostsPage = React.lazy(() => import('pages/AllPosts'));
const MyPostsPage = React.lazy(() => import('pages/MyPosts'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" render={() => <Redirect to="/all-posts" />} />
        <PrivateRoutes />
      </Switch>
    </Suspense>
  );
};

const PrivateRoutes = () => {
  return (
    <Suspense fallback={<Layout />}>
      <Layout>
        <Switch>
          <PrivateRoute exact path="/all-posts" component={AllPostsPage} />
          <PrivateRoute exact path="/my-posts" component={MyPostsPage} />
        </Switch>
      </Layout>
    </Suspense>
  );
};

export default Routes;
