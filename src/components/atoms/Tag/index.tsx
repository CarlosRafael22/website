import { Badge } from '@chakra-ui/react'

export type TagProps = {
    text: string
}

const Tag = ({ text }: TagProps) => (
    <Badge colorScheme='green' h='max-content' marginRight='0.5rem' verticalAlign='center'>{text}</Badge>
)

export default Tag