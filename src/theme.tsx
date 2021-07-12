import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

// const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
    primary: '#31393C',
    secondary: {
        default: '#0078FF',
        hover: '#0151AC'
    },
    bgGray: '#F3F3F3',
    bgWhite: '#FFFFFF',
    yellow: {
        default: '#FFBA00',
        hover: '#D39B01'
    },
    red: {
        default: '#FF1400',
        hover: '#CB1000'
    },
    green: {
        default: '#1EBB48',
        hover: '#008D26'
    },
    lightGray: {
        default: '#C4C4C4',
        hover: '#EEEEEE',
        disabled: '#9E9E9E'
    },
    lightBlue: {
        default: '#0CD6BE',
        hover: '#00AD98'
    }
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat'
  },
  breakpoints,
  space: {
    '3xl': '12rem'
  },
  components: {
    Heading: {
      variants: {
        h1: {
          fontSize: '4xl', fontWeight: 'bold'
        },
        h2: {
            fontSize: '3xl', fontWeight: 'bold'
        },
        h3: {
            fontSize: 'xl', fontWeight: 'bold'
        },
        h4: {
            fontSize: 'md', fontWeight: 'bold'
        }
      }
    },
    Text: {
      variants: {
        b1: {
          fontSize: 'md', fontWeight: '400'
        },
        b2: {
          fontSize: 'md', fontWeight: '300', marginY: '1rem'
        },
        b3: {
          fontSize: 'sm', fontWeight: '300'
        },
        code: {
          backgroundColor: '#08090a', color: 'white', marginY: 0, paddingX: '1rem'
        }
      }
    },
    Link: {
      variants: {
        default: {
          color: 'secondary.default', textDecoration: 'underline', _hover: { backgroundColor: 'lightBlue.default' }
        }
      }
    }
  }
})

export default theme
