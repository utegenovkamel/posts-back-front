import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Layout from './components/Layout'

const LoginPage = React.lazy(() => import('./pages/Login/index'))
const AllPostsPage = React.lazy(() => import('./pages/AllPosts'))
const UserPostsPage = React.lazy(() => import('./pages/UserPosts'))
const CreatePostPage = React.lazy(() => import('./pages/CreatePost'))
const UpdatePostPage = React.lazy(() => import('./pages/UpdatePost'))

const Routes = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Switch>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <PrivateRoutes />
            </Switch>
        </Suspense>
    )
}

const PrivateRoutes = () => {
    return (
        <Suspense fallback={<Layout />}>
            <Layout>
                <Switch>
                    <PrivateRoute
                        exact
                        path="/all-posts"
                        component={AllPostsPage}
                    />
                    <PrivateRoute
                        exact
                        path="/my-posts"
                        component={UserPostsPage}
                    />
                    <PrivateRoute
                        exact
                        path="/my-posts/:postId"
                        component={UpdatePostPage}
                    />
                    <PrivateRoute
                        exact
                        path="/create-post"
                        component={CreatePostPage}
                    />
                </Switch>
            </Layout>
        </Suspense>
    )
}

export default Routes
