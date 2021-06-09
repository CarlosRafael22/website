import { Grid, Flex } from '@chakra-ui/react'
import ProfileInfo from '../../molecules/ProfileInfo'
import PlatformLinkSection from '../../molecules/PlatformLinkSection'

const ProfileSection = () => {
    return (
        <Grid gap='1.5rem'>
            <Flex justifyContent='center'>
                <ProfileInfo />
            </Flex>
            <PlatformLinkSection />
        </Grid>
    )
}

export default ProfileSection