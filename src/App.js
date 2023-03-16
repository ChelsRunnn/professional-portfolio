import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";

import '@fontsource/diplomata-sc';
import '@fontsource/la-belle-aurore';
import '@fontsource/playfair-display';
import '@fontsource/playfair-display-sc';

import "react-responsive-carousel/lib/styles/carousel.min.css";

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