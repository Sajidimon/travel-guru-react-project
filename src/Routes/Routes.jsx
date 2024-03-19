import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home/Home";
import Booking from "../Pages/Booking/Booking";
import Login from "../Pages/Login/Login";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/booking',
                element: <Booking></Booking>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default routes;