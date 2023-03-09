import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    h1:  `'Diplomata SC', sans-serif`,
    h2: `'La Belle Aurore', serif`,
    h3: `'Playfair Display SC', 'serif'`,
    h4: `'Playfair Display', 'san serif'`,
  },
  shadows: {
    h1: '1px'
  },
  colors: {
    creams: {
      100: '#F7EEE9',
      200: '#CECECE',
      300: '#D3BAA4',
      400: '#BFA38A',
      500: '#A69180'
    },
    // browns: {
    //   100: '#A66E4E',
    //   200: '#733C30',
    //   300: '#40282C',
    //   400: '#26170F'
    // },
    greys: {
      100: '#DCDBDD',
      200: '#C2C1BF',
      300: '#979691',
    },
    browns: {
      100: '#D7B2A0',
      200: '#A66E4E',
      300: '#895834',
      400: '#6D5A4F',
      500: '#543315'
    },
    blues: {
      100: '#658CA8',
      200: '#A8BBBF',
    }
  },
  layerStyles: {
    btnRed: {
      bgColor: 'red.800',
      rounded: 'full',
      color: 'white',
      fontFamily: 'h2',
      _hover:{ bgColor: 'red.700'},
      _focus: { boxShadow: 'none', bgColor: 'red.600'}
    }
  }
})

export default theme;
