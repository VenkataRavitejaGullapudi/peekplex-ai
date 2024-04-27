import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MovieDetailView from "./MovieDetailView";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movie",
      element: <MovieDetailView/>
    }
  ]);
  

  return (
    <div className="h-full w-full overflow-x-hidden">
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
