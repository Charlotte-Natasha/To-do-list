import Home from "./components/Home";
import TodoDetails from "./components/TodoDetails";
import {createBrowserRouter} from "react-router-dom";

// "Browser router" is the new default, apparently.
// Create one root route '/' and one as an example for todo details.
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "todo/:todoId", // The URL path. ':todoId' is a parameter that can be passed. Example: /todo/123
        element: <TodoDetails />, // The component to show
        loader: async ({ _, params }) => { // a function that loads the data for the given route, in this case a made-up todo item based on the given todo id.
            return {
                id: params.todoId,
                name: "My Todo"
            }
        },
    },
]);

export default router;