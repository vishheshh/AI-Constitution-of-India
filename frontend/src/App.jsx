import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/homepage';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App