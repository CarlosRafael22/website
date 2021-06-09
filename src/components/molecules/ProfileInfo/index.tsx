import { Avatar, Heading, Text, Flex, useBreakpointValue } from '@chakra-ui/react'

const ProfileHeader = () => {
    const avatarSize = useBreakpointValue({ base: 'xl', md: '2xl' })

    return (
        <Flex flexDirection='column' h={['180px','200px']} w={['300px','400px']} justifyContent='space-between' alignItems='center'>
            <Avatar size={avatarSize} name='Rafael Leitao' src="https://bit.ly/kent-c-dodds" />
            <Heading variant='h3'>Frontend Software Engineer</Heading>
            <Text variant='body1'>Working @Holidu</Text>
        </Flex>
    )
}

export default ProfileHeader