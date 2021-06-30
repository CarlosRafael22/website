import { Flex, Text } from '@chakra-ui/react'
import Tag from '../../atoms/Tag'

export type BlogPostMetaDataProps = {
    tags: string[],
    date: string,
    type: 'postPreview' | 'postHeader'
}

const getOnlyDate = (date: string) => {
    const firstSpaceIndex = date.indexOf(' ')
    return date.slice(firstSpaceIndex)
}

const BlogPostMetaData = ({tags, date, type}: BlogPostMetaDataProps) => {

    const formattedDate = new Date(date).toDateString()
    const dateWithoutWeekDay = getOnlyDate(formattedDate)

    return (
        <Flex
            marginTop='0.5rem' flexDirection={['column', 'row']}
            justifyContent={type === 'postHeader' ? 'space-between' : 'flex-start'}
            alignItems={['flex-start', 'center']}>
            <Flex marginRight={type === 'postHeader' ? 0 : '1rem'}>
                {tags.map((tag, index) => (
                    <Tag text={tag} key={index} />
                ))}
            </Flex>
            <Text alignSelf='flex-end' marginY='0.5rem'>{type === 'postHeader' ? `Published on: `: ''}{dateWithoutWeekDay}</Text>
        </Flex>
    )
}

export default BlogPostMetaData