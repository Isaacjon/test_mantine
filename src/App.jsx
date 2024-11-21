
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./App.css";

import { MantineProvider, createTheme } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Layout from "./components/layout";
import { Catalog } from "./pages/catalog";
import { Cart } from "./pages/cart";

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
              <Route path="catalog" element={<Catalog />} />
              <Route path="cart" element={<Cart />} />
              <Route path="profile" element={<div style={{minHeight: 'calc(100dvh - 70px)'}}>profile page</div>} />
            </Route>
            
          </Routes>
        </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
