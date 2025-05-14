import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {path:"login",element:<Login/>},
      {path:"profile",element:<Profile/>}
    ],
  },

]);

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Body />}>
//             <Route path="login" element={<Login />} />
//             <Route path="profile" element={<Profile />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

export default function App(){
  return <RouterProvider router={router}/>
};
