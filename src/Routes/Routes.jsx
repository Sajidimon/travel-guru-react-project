import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>
    }
])

export default routes;