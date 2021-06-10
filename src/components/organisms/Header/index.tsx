import { Flex, Text, Heading, Link } from '@chakra-ui/react'

type NavLinkProps = {
    title: string,
    link?: string
}

const NavLink = ({ title }: NavLinkProps) => (
    <Link marginX='1rem'><Text variant='h2'>{title}</Text></Link>
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
                    {['Now', 'About', 'Blog'].map((title, index) => <NavLink title={title} key={index} />)}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Header