import { Flex, Icon } from '@chakra-ui/react'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type IconsOptions = 'linkedin'

export type PlatformLinkProps =  {
    platform: IconsOptions
}

const getIcon = (option: IconsOptions) => {
    return {
        'linkedin': 'fa-linkedin'
    }[option]
}

const PlatformLink = ({ platform }: PlatformLinkProps) => {
    const iconFa = getIcon(platform)
    return (
        <Flex
            h='60px' w='60px'
            backgroundColor='white'
            borderRadius='50%'
            justifyContent='center' alignItems='center'
            _hover={{ boxShadow: '0 0 0 5px #EEEEEE' }}
            >
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
        </Flex>
    )
}

export default PlatformLink