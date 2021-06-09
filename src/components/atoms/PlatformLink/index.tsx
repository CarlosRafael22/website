import { Flex, Link } from '@chakra-ui/react'
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
    return (
        <Link href={link} isExternal>
            <Flex
                h='60px' w='60px'
                backgroundColor='white'
                borderRadius='50%'
                justifyContent='center' alignItems='center'
                _hover={{ boxShadow: '0 0 0 5px #EEEEEE' }}
            >
                <FontAwesomeIcon icon={faIcon} size='2x' />
            </Flex>
        </Link>
    )
}

export default PlatformLink