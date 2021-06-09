import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// export const decorators = [
//   (Story) => (
//       <ChakraProvider resetCSS theme={theme}>
//         <Story />
//       </ChakraProvider>
//   ),
// ]

const withChakra = (StoryFn) => {

  return (
    <ChakraProvider theme={theme} resetCSS>
      <div id="story-wrapper" style={{ minHeight: "100vh" }}>
        <StoryFn />
      </div>
    </ChakraProvider>
  )
}

export const decorators = [withChakra]