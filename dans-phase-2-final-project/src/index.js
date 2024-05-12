import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import Brands from "./Brands";
import Shoes from "./Shoes";
import AddShoe from "./AddShoe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/brands",
    element: <Brands />,
    errorElement: <Error />,
  },
  {
    path: "/shoes",
    element: <Shoes />,
    errorElement: <Error />,
  },
  {
    path: "/add-a-shoe",
    element: <AddShoe />,
    errorElement: <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
