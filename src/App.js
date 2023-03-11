import { useEffect} from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './App.css';
import Home from './pages/Home';
import Root from './pages/Root';
import Nfts from './components/Main/Nfts';
import PostFeed from './components/UI/PostFeed';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {path: "/", element: <Home/>},
      {path: "/posts", element: <PostFeed/>},
      {path: "/mynfts", element: <Nfts/>}
   
    ],
  },
]);


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
