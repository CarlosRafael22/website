import { Flex } from '@chakra-ui/react'
import PlatformLink, { IconsOptions } from '../../atoms/PlatformLink'

const platforms = [
{
    platform: 'twitter',
    link: 'https://twitter.com/c_rafael22'
},
{
    platform: 'dev',
    link: 'https://dev.to/carlosrafael22'
},
{
    platform: 'github',
    link: 'https://github.com/CarlosRafael22'
},
{
    platform: 'linkedin',
    link: 'https://www.linkedin.com/in/carlos-rafael-leitao/'
},
{
    platform: 'email',
    link: 'mailto:carlosrafael093@gmail.com'
},
]

const ProfileHeader = () => {
    return (
        <Flex maxWidth='380px' justifyContent='space-between'>
            {
                platforms.map(platform => {
                    const extracted = Object.entries(platform).map(([_, value]) => value) as IconsOptions[]
                    return <PlatformLink platform={extracted[0]} link={extracted[1]} />
                })
                
            }
        </Flex>
    )
}

export default ProfileHeader