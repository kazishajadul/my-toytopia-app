import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ToyDetails from "../pages/ToyDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blog from "../pages/Blog";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blog /> },
      { path: "/about", element: <About /> },
      { path: "/toy/:id", element: <ToyDetails /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default router;




// import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layout/MainLayout";
// import Home from "../pages/Home";
// import ToyDetails from "../pages/ToyDetails";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Blog from "../pages/Blog";
// import About from "../pages/About";
// import PrivateRoute from "./PrivateRoute";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/blogs", element: <Blog /> },
//       { path: "/about", element: <About /> },
//       {
//         path: "/toys/:id",
//         element: (
//           <PrivateRoute>
//             <ToyDetails />
//           </PrivateRoute>
//         ),
//       },
//       { path: "/login", element: <Login /> },
//       { path: "/register", element: <Register /> },
//     ],
//   },
// ]);

// export default router;







// import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layout/MainLayout";
// import Home from "../pages/Home";
// import ToyDetails from "../pages/ToyDetails";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Blog from "../pages/Blog";
// import About from "../pages/About";
// import PrivateRoute from "../routes/PrivateRoute";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/blogs", element: <Blog /> },
//       { path: "/about", element: <About /> },
//       {
//         path: "/toys/:id",
//         element: (
//           <PrivateRoute>
//             <ToyDetails />
//           </PrivateRoute>
//         ),
//       },
//       { path: "/login", element: <Login /> },
//       { path: "/register", element: <Register /> },
//     ],
//   },
// ]);

// export default router;


