import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LeftBar from "./Components/Leftbar";
import Main from "./Components/Main";
import Profile from "./Components/Profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Message from "./Components/Message";

const ErrorRoute = () => <div>Page not found</div>;

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="md:flex justify-center">
          <LeftBar />
          <main role="main" className="md:w-[990px] pb-20">
            <section className="md:w-[600px] border border-y-0 border-gray-800 h-full">
              <Main />
            </section>
          </main>
        </div>
      ),
      errorElement: <ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/profile",
      element: (
        <div className="md:flex justify-center">
          <LeftBar />
          <main role="main" className="md:w-[990px]">
            <section className="md:w-[600px] border border-y-0 border-gray-800 h-full">
              <Profile />
            </section>
          </main>
        </div>
      ),
    },
    {
      path: "/message",
      element: (
        <div className="md:flex justify-center">
          <LeftBar />
          <main role="main" className="md:w-[990px]">
            <section className="md:w-[600px] border border-y-0 border-gray-800 h-full">
              <Message className="w-full" />
            </section>
          </main>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={myRouter} />;
};

export default App;
