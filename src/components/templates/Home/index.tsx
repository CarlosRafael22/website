import { Box, Flex } from '@chakra-ui/react'
import Header from '../../organisms/Header'
import ProfileSection from '../../organisms/ProfileSection'
import Footer from '../../organisms/Footer'

const Home = () => {
    return (
        <Box>
            <Header />
            <Flex w='100vw' h='80vh' bgColor='bgGray' justifyContent='center' alignItems='center'>
                <ProfileSection />
            </Flex>
            <Footer />
        </Box>
    )
}

export default Home