import React from 'react';
import { Box, VStack, HStack, Text } from '@chakra-ui/react';
import NavTabs from './NavTabs';

const styles = {
    header: {
        background:'rgba(0, 0, 0, 0.6)'
    },
    img: {
        backgroundImage: `url('https://img.freepik.com/free-photo/hand-painted-watercolor-background_24972-1973.jpg?w=1480&t=st=1667655489~exp=1667656089~hmac=8988c5cef2bb7c29f43e13c639b839e3913f02e82ae2c5a76c400684db94435f')`,
        height: '400px'
    },
};

function Header() {
    return (
      <Box as='header'
           bgGradient='linear(to-b, red.800, browns.400)'
           w={'100%'}
           h={{base:'15vh', sm:'25vh'}}
           backgroundImage={
            'url(https://images.unsplash.com/photo-1553453005-34d0cb607b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)'
           }
           backgroundSize={'cover'}
           backgroundPosition={'center 40%'}>
         <VStack 
           py={{ base: '4', lg: '5' }}
           w={'full'}
           justify={'center'}>
             <Box display={'flex'} align={'flex-start'} justify={'center'} direction={'row'}>
                <Text
                  color={'creams.400'}
                  fontWeight={700}
                  lineHeight={1.2}
                  fontSize={{ base: '44px', md: '65px', lg: '90px' }}
                  textShadow='5px .5px #822727'
                  fontFamily='h1'
                  pr={{ base: '3px', md: '7px', lg:'12'}}>
                  Chelsea Runacres</Text>
             </Box>
             <Text
               color={'creams.400'}
               fontWeight={700}
               lineHeight={1.2}
               fontSize={{ base: '44px', md: '65px', lg: '90px' }}
               textShadow='5px .5px #822727'
               fontFamily='h1'
               pr={{ base: '3px', md: '7px', lg:'12'}}>
               Chelsea Runacres</Text>
            <HStack>
                < NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            </HStack>
         </VStack>
      </Box>
    )
};

export default Header