import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./UI/Home";
import Menu from "./Features/Menu/Menu";
import Error from "./UI/Error";
import Cart from "./Features/Cart/Cart";
import CreateOrder from "./Features/Order/CreateOrder";
import Order from "./Features/Order/Order";
import AppLayout from "./UI/AppLayout";
import { action as updateOrderAction } from "./Features/Order/UpdateOrder";
import { createOrder } from "./services/apiRestaurant";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: Menu.loader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: CreateOrder.action,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: Order.loader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
