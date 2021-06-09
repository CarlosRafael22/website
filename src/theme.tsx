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
        body1: {
          fontSize: 'md', fontWeight: '400'
        },
        body2: {
          fontSize: 'md', fontWeight: '300'
        }
      }
    }
  }
})

export default theme
