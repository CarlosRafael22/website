import { Flex, Text } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex
            h='100px' w='100vw'
            justifyContent='center' alignItems='center'
            position='absolute' bottom={0}
            bgColor='bgWhite'  
        >
            <Text variant='body2'>2021 Rafael Leitão - Created with Next.JS and Chakra-UI</Text>
        </Flex>
    )
}

export default Footer