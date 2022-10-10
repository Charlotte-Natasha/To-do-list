import router from "./routes";
import {RouterProvider} from "react-router-dom";

function App() {
  return (
      // There's no need to explicitly define a root component anymore since that's automatically handled by the router
      // as soon as the user visits the page.
      <RouterProvider router={router}/>
  );
}

export default App;
