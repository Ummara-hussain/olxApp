import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from 'react-router-dom'

import SignIn from '../views/Signin'
import Signup from '../views/Signup'
import Dashboard from '../views/Dashboard'
import PostAd from '../views/PostAd'
import PostDetails from '../views/PostDetails'
import Header from '../components/Header'
import Footer from '../components/Footer'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <SignIn />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/postAd",
                element: <PostAd />,
            },
            {
                path: "/postAd/:id",
                element: <PostDetails />
            }
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    return (
        <div>
            <Header/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Router