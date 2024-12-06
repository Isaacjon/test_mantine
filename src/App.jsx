
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import '@mantine/notifications/styles.css';
import "./App.css";

import { MantineProvider, createTheme } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Layout from "./components/layout";
import { Catalog } from "./pages/catalog";
import { Cart } from "./pages/cart";
import { Profile } from "./pages/profile";
import { Checkout } from "./pages/checkout";
import { Notifications } from "@mantine/notifications";
import { ShoppingList } from "./pages/shopping-list";
import { Auth } from "./pages/auth";
import { ProductDetails } from "./pages/product-details";
import { Shop } from "./pages/shop";

function App() {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });
  return (
    <MantineProvider theme={theme} >
        <BrowserRouter>
          <Routes>
            {/* */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shopping-list" element={<ShoppingList/>} />
              <Route path="shop" element={<Shop />} />
              <Route path="auth" element={<Auth />} />
              <Route path="cart" element={<Cart />} />
              <Route path="catalog" element={<Catalog />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="product/:id" element={<ProductDetails />} />
            </Route>
            
          </Routes>
        </BrowserRouter>
        <Notifications />
    </MantineProvider>
  );
}

export default App;
