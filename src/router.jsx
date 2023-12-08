import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FirstPage from "./Page/FirstPage";

export const router = createBrowserRouter([
  {
    path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <FirstPage/>
            },
            
     ]
  },
]);