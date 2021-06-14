import { Flex, Text, Heading, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

type NavLinkProps = {
    title: string,
    link?: string
}

const NavLink = ({ title }: NavLinkProps) => (
    <ChakraLink marginX='1rem'>
        <Link href={`/${title}`}>
            <Text variant='h2'>{title}</Text>
        </Link>
    </ChakraLink>
)

const Header = () => {
    return (
        <Flex
            h='10vh' w='100vw'
            bgColor='bgWhite'
        >
            <Flex
                h='100%' w='80%'
                margin='0 auto'
                justifyContent='space-between' alignItems='center'    
            >
                <Heading variant='h4'>Rafael Leitão</Heading>
                <Flex>
                    {['now', 'about', 'blog'].map((title, index) => <NavLink title={title} key={index} />)}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header