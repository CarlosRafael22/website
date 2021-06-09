import { Flex, Link, useBreakpointValue } from '@chakra-ui/react'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faTwitter, faDev, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type IconsOptions = 'linkedin' | 'dev' | 'twitter' | 'github' | 'email'

export type PlatformLinkProps =  {
    platform: IconsOptions,
    link: string
}

const getIcon = (option: IconsOptions) => {
    return {
        'linkedin': faLinkedin,
        'dev': faDev,
        'twitter': faTwitter,
        'github': faGithub,
        'email': faEnvelope
    }[option]
}

const PlatformLink = ({ platform, link }: PlatformLinkProps) => {
    const faIcon = getIcon(platform)
    const faSize = useBreakpointValue({ base: '2x', md: '2x' })

    return (
        <Link href={link} isExternal>
            <Flex
                h={['50px','60px']} w={['50px','60px']}
                backgroundColor='white'
                borderRadius='50%'
                justifyContent='center' alignItems='center'
                _hover={{ boxShadow: '0 0 0 5px #EEEEEE' }}
            >
                <FontAwesomeIcon icon={faIcon} size={faSize as SizeProp} />
            </Flex>
        </Link>
    )
}

export default PlatformLink