import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'

const Footer = () => {
    const textSize = useBreakpointValue({ base: 'b3', md: 'b2' })

    return (
        <Flex
            h='100px' w='100vw'
            justifyContent='center' alignItems='center'
            position='absolute' bottom={0}
            bgColor='bgWhite'  
        >
            <Text variant={textSize}>2021 Rafael Leitão - Created with Next.JS and Chakra-UI</Text>
        </Flex>
    )
}

export default Footer