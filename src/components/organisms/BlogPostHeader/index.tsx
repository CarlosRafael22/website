import { Box, Heading, Text, Badge, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import Tag from '../../atoms/Tag'

export type BlogPostHeaderProps = {
    title: string,
    date: string,
    tags: string[],
    coverImage: any
}

const BlogPostHeader = ({title, date, tags, coverImage}: BlogPostHeaderProps) => {
    const getOnlyDate = (date: string) => {
        const firstSpaceIndex = date.indexOf(' ')
        return date.slice(firstSpaceIndex)
    }

    const formattedDate = new Date(date).toDateString()
    const dateWithoutWeekDay = getOnlyDate(formattedDate)

    return (
        <Box w={['100vw', '50vw']}>
            <Image src={coverImage.url} alt={coverImage.fileName} width='800' height='300' />
            <Box marginY='1rem'>
                <Heading variant='h1'>{title}</Heading>
                <Flex marginTop='0.5rem' flexDirection={['column', 'row']} justifyContent='space-between' alignItems={['flex-start', 'center']}>
                    <Flex>
                        {tags.map((tag, index) => (
                            <Tag text={tag} key={index} />
                        ))}
                    </Flex>
                    <Text alignSelf='flex-end' marginY='0.5rem'>Published on: {dateWithoutWeekDay}</Text>
                </Flex>
            </Box>
        </Box>
    )
}

export default BlogPostHeader