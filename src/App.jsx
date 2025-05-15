import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "../src/components/Body";
import Login from "../src/components/Login";
import Profile from "../src/components/Profile";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Feed from "../src/components/Feed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <Feed /> },
      { path: "login", element: <Login /> },
      { path: "profile", element: <Profile /> },
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

export default function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  );
}
