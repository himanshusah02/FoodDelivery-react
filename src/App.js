import React , { lazy ,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import UserClass1 from "./components/UserClass1";
import UserContext from "./utils/UserContext";
// import { lazy } from "react";
// import Grocery from "./components/Grocery";
import {Provider} from "react-redux";
import appStore from "./utils/AppStore1";
import Cart from "./components/Cart";



const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

  const[userName, setUserName] = useState();

  useEffect(()=>{
    const data = {
      name: "Himan",
    }
    setUserName(data.name);
     
  },[])

  

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggendInuser : userName, setUserName}}>
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
    element: <AppLayout/>,
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
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurant />,
      },
      {
        path: "/users",
        element: <UserClass1 />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>,
      },
      {
         path : "/Cart",
         element: <Cart/>
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
