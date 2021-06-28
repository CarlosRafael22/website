import { Box, Flex } from '@chakra-ui/react'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'

export type WrapperProps = {
    children: React.ReactNode,
    [key: string]: any
}

const Wrapper = ({ children, ...props }: WrapperProps) => {
    return (
        <Box>
            <Header />
            <Flex w='100vw' minHeight='80vh' bgColor='bgGray' justifyContent='center' alignItems='center' {...props}>
                {children}
            </Flex>
            <Footer />
        </Box>
    )
}

export default Wrapper