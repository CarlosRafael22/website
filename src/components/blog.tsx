import { Heading, Text, Link } from '@chakra-ui/react'

export const components = {
  h1: (props) => <Heading variant='h1' {...props} />,
  h2: (props) => <Heading variant='h2' {...props} />,
  h3: (props) => <Heading variant='h3' {...props} />,
  a: props => <Link variant='default' isExternal {...props} />,
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
  ol: props => <ol style={{ padding: '0 1rem 0 1rem' }} {...props} />,
  ul: props => <ul style={{ padding: '0 1rem 0 1rem' }} {...props} />,
  CodeWrapper: () => {
    return (
        <Text>Hello everybody</Text>
    )
}
}