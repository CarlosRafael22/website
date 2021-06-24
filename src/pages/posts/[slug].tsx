import { GraphQLClient, gql } from 'graphql-request'
import { Flex, Heading, Text } from '@chakra-ui/react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

const graphCMS = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/ckpwthb6qv9rh01z6508r5114/master')

const CodeWrapper = (props) => {
    return (
        <Text>Hello everybody</Text>
    )
}

const components = {
  h1: (props) => <Heading style={{ color: 'red' }} {...props} />,
  p: (props) => <Text
    marginY='1rem'
    sx={{
        'p': {
            color: 'red'
        }
    }} {...props} />,
  blockquote: (props) => {
      console.log('blockquote: ', props)
      return (
      <blockquote style={{ borderLeft: '5px solid black', paddingLeft: '1rem'}} {...props}>
          <Text as='cite'>{props.children}</Text>
      </blockquote>)
  },
  inlineCode: props => {
      console.log('CODE')
      return (<code style={{ backgroundColor: '#08090a', padding: '1rem', color: 'white', borderRadius: '0.5rem' }} {...props} />)
  },
  CodeWrapper
}

export async function getStaticProps({ params }) {
    const postFields = gql`
        fragment AllPostFields on Post {
            title,
            slug,
            date,
            excerpt,
            coverImage {
                url,
                fileName
            },
            content {
                html,
                markdown
            },
            tags,
            author {
                name,
                title
            },
            seo {
                title
            }
        }
    `
    const { post } = await graphCMS.request(`
        ${postFields}
        query BlogPostQuery($slug: String!) {
            post(where: { slug: $slug }) {
                ...AllPostFields
            }
        }
    `, {
        slug: params.slug
    })

    console.log('NO STATIC: ', post.content.markdown)
    const mdxSource = await serialize(post.content.markdown)
    console.log('SOURCE MDX: ', mdxSource)

    return {
        props: {
            post,
            mdxSource
        }
    }
}

export async function getStaticPaths() {
    const { posts } = await graphCMS.request(`
        {
            posts {
                slug,
                title
            }
        }
    `)
    console.log('PATTAHHHHHAS: ', posts)
    return {
        paths: posts.map(({ slug }) => ({
            params: { slug }
        })),
        fallback: false
    }
}

const BlogPost = ({ post, mdxSource }) => {
    console.log('POSTSSS: ', post)
    console.log('MDX: ', mdxSource)
    function createMarkup() {
    return {__html: post.content.html};
    }
    return (
        <Flex w='60vw' flexDirection='column' margin='0 auto' >
            {/* <div dangerouslySetInnerHTML={createMarkup()} /> */}
            <MDXRemote {...mdxSource} components={components} />
        </Flex>
    )
}

export default BlogPost
