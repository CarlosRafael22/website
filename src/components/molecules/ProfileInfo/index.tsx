import { Avatar, Heading, Text, Flex, useBreakpointValue } from '@chakra-ui/react'

const ProfileHeader = () => {
    const avatarSize = useBreakpointValue({ base: 'xl', md: '2xl' })

    return (
        <Flex flexDirection='column' h={['180px','200px']} w={['300px','400px']} justifyContent='space-between' alignItems='center'>
            <Avatar size={avatarSize} name='Rafael Leitão' src='https://pbs.twimg.com/profile_images/1394400955127504901/7jm6GeHf_400x400.jpg' />
            <Heading variant='h3' textAlign='center'>Frontend Software Engineer</Heading>
            <Text variant='b1'>Working @Holidu</Text>
        </Flex>
    )
}

export default ProfileHeader