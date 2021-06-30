import { GraphQLClient } from 'graphql-request'
import Blog from '../components/templates/Blog'

const BlogHome = ({ posts }) => {
    console.log('PROPS DO BLOG: ', posts)
    return (
        <Blog posts={posts} />
    )
}

export async function getStaticProps(context) {
    const graphCMS = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/ckpwthb6qv9rh01z6508r5114/master')

    const data = await graphCMS.request(`{
        posts {
            title,
            slug,
            date,
            excerpt,
            tags
          }
    }`)

    console.log('DATA DO STATIC PROPS: ', data)
    const { posts } = data

    return {
        props: {
            posts
        }
    }
}

export default BlogHome