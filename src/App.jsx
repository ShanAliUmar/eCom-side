import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import "./app.scss"
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <div style={{paddingTop:"80px"}}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;