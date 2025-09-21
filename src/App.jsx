import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./UI/Home";
import Menu from "./Features/Menu/Menu";
import { loader as menuLoader } from "./Utilities/helpers";
import Cart from "./Features/Cart/Cart";
import CreateOrder from "./Features/Order/CreateOrder";
import Order from "./Features/Order/Order";
import AppLayout from "./UI/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
