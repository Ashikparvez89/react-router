import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import Blog from './pages/Blog.jsx';
import Bookmark from './pages/Bookmark.jsx';
import FullPost from './FullPost.jsx';
import Users from './Users/Users.jsx';
import UserDetails from './Users/UserDetails.jsx';
import Error from './Errormasg/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children:[
      {
        path:"/blog",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Blog></Blog>
      },
      {
        path:"/bookmark",
        element:<Bookmark></Bookmark>
      },
      {
        path:"/post/:id",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element:<FullPost></FullPost>
      },
      {
        path:"/users",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:"/user/:id",
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element:<UserDetails></UserDetails>
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
