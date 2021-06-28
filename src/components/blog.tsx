import { Heading, Text } from '@chakra-ui/react'

export const components = {
  h1: (props) => <Heading style={{ color: 'red' }} {...props} />,
  p: (props) => {
    //   console.log('CHILDREN PROPS: ', props.children.mdxType, props.children?.props?.mdxType, props.mdxType, props.parentName)
      return (<Text variant={props.children?.props?.mdxType === 'inlineCode' ? 'code' : 'b2'} {...props} />)
  },
  blockquote: (props) => {
    //   console.log('blockquote: ', props)
      return (
      <blockquote style={{ borderLeft: '5px solid black', paddingLeft: '1rem'}} {...props}>
          <Text as='cite'>{props.children}</Text>
      </blockquote>)
  },
  inlineCode: props => {
      return (<code style={{ backgroundColor: '#08090a', color: 'white' }} {...props} />)
  },
  CodeWrapper: () => {
    return (
        <Text>Hello everybody</Text>
    )
}
}