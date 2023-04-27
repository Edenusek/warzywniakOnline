import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ForCompanyPage from "./pages/ForCompany";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ShopPage from "./pages/Shop";
import Regulations from "./pages/Regulations";
import PrivatePolitics from "./pages/PrivatePolitics";
import classes from "./App.module.css";
import BasketPage from "./pages/Basket";
import ErrorPage from "./pages/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      { path: "/forCompany", element: <ForCompanyPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/regulations", element: <Regulations /> },
      { path: "/privatePolitics", element: <PrivatePolitics /> },
      { path: "/basket", element: <BasketPage /> },
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
