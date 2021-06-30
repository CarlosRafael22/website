import { GraphQLClient, gql } from 'graphql-request'
import { Box } from '@chakra-ui/react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import WrapperTemplate from '../../components/templates/Wrapper'
import { components } from '../../components/blog'
import BlogPostHeader from '../../components/organisms/BlogPostHeader'

const graphCMS = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/ckpwthb6qv9rh01z6508r5114/master')

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

    // console.log('NO STATIC: ', post.content.markdown)
    const mdxSource = await serialize(post.content.markdown)
    // console.log('SOURCE MDX: ', mdxSource)

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
    // console.log('PATTAHHHHHAS: ', posts)
    return {
        paths: posts.map(({ slug }) => ({
            params: { slug }
        })),
        fallback: false
    }
}


const BlogPost = ({ post, mdxSource }) => {
    // console.log('POSTSSS: ', post)
    // console.log('MDX: ', mdxSource)

    const { coverImage, title, date, tags } = post
    const headerProps = { title, date, tags, coverImage }
    return (
        <WrapperTemplate flexDirection='column'>
            <Box w={['100vw', '50vw']} marginBottom='5rem' paddingX={['0.5rem', 0]}>
                <BlogPostHeader {...headerProps} />
                <MDXRemote {...mdxSource} components={components} />
            </Box>
        </WrapperTemplate>
    )
}

export default BlogPost
