import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ForCompanyPage from "./pages/ForCompany";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ShopPage from "./pages/Shop";
import classes from "./App.module.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/forCompany", element: <ForCompanyPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return (
    <div className={classes.box}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
