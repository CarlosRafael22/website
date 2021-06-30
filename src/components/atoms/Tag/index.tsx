import { Badge } from '@chakra-ui/react'

export type TagProps = {
    text: string,
    key?: string
}

const Tag = ({text, key}: TagProps) => (
    <Badge colorScheme='green' h='max-content' marginRight='0.5rem' verticalAlign='center' key={key}>{text}</Badge>
)

export default Tag