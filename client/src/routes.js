import Layout from 'containers/Layout'
import PrivateRoute from 'containers/PrivateRoute'
import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

const LoginPage = React.lazy(() => import('pages/Login/index'))
const AllPostsPage = React.lazy(() => import('pages/AllPosts'))
const MyPostsPage = React.lazy(() => import('pages/MyPosts'))

const Routes = () => (
  <Suspense fallback={<div>Loading</div>}>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/" render={() => <Redirect to="/all-posts" />} />
      <PrivateRoutes />
    </Switch>
  </Suspense>
)

const PrivateRoutes = () => (
  <Suspense fallback={<Layout />}>
    <Layout>
      <Switch>
        <PrivateRoute exact path="/all-posts" component={AllPostsPage} />
        <PrivateRoute exact path="/my-posts" component={MyPostsPage} />
      </Switch>
    </Layout>
  </Suspense>
)

export default Routes
