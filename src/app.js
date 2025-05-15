import REACT, { lazy, Suspense, useState, useEffect, useContext } from "react";
import REACTDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
//import { useSelector } from "react-redux";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery")); // Lazy load the Grocery component

const AppLayout = () => {
  const [loggedInInfo, setLoggedInInfo] = useState();
  useEffect(() => {
    const newData = {
      name: "Shivangi Dutta ",
    };
    setLoggedInInfo(newData?.name);
  }, []);
  // const cartItems = useSelector((store) => store.cart.items);
  return (
    <Provider store={AppStore}>
      <UserContext.Provider
        value={{ loggedInUser: loggedInInfo, setLoggedInInfo }}
      >
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = REACTDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
