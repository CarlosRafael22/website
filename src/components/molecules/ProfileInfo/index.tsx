import { Avatar, Heading, Text, Flex } from '@chakra-ui/react'

const ProfileHeader = () => {
    return (
        <Flex flexDirection='column' h='200px' w='400px' justifyContent='space-between' alignItems='center'>
            <Avatar size="2xl" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Heading variant='h3'>Frontend Software Engineer</Heading>
            <Text variant='body1'>Working @Holidu</Text>
        </Flex>
    )
}

export default ProfileHeader