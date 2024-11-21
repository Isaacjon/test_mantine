import "./App.css";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { Container, MantineProvider, createTheme } from "@mantine/core";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";

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
          </Route>
          
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
