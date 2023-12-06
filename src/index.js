import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Dashboard from './Dashboard';
import Forgotpw from './forgotpw.js';
import TutorProfile from './TutorProfile.js';
import StudentProfile from './StudentProfile.js';
import Forum from "./Forum.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/userdash/:var",
    element: <Dashboard />,
    loader: ({params})=>{return params}
  },
  {
    path:"/test",
    element:<h2>testing</h2>
  },
  {
    path:"/forgotpw",
    element:<Forgotpw/>
  },
  {
    path: "/profile/tutor/:id",
    element: <TutorProfile />,
    loader: ({params})=>{return params}
  },
  {
    path: "/profile/student/:id",
    element: <StudentProfile />,
    loader: ({params})=>{return params}
  },
  {
    path: "/forum",
    element: <Forum user={{username:"test"}}/>
    //loader: ({params})=>{return params}
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
