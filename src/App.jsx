import './App.css'

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Container, MantineProvider, createTheme } from '@mantine/core';
import Home from './pages/Home';

function App() {
  
  const theme = createTheme({
    /** Put your mantine theme override here */
  });
  return (
    <MantineProvider theme={theme}>
      <Container bg="#f5f5f5">
        <Container size="500px">
          <Home />
        </Container>
      </Container>
    </MantineProvider>
  )
}

export default App
