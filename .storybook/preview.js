import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'default',
    values: [
        {
            name: 'default',
            value: '#F3F3F3'
        }
    ]
  }
}

const withChakra = (Story) => {

  return (
    <ChakraProvider theme={theme} resetCSS>
      <div id="story-wrapper" style={{ minHeight: "100vh" }}>
        <Story />
      </div>
    </ChakraProvider>
  )
}

export const decorators = [withChakra]