import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
// import files
import theme from "./styles/theme";
import ContentContainer from './components/ContentContainer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ContentContainer />
    </ChakraProvider>
  )
}

export default App;