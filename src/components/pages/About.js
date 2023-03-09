import React from 'react';
import { Box, Text, HStack, Image } from '@chakra-ui/react';

export default function About() {
    return (
    <Box 
      as="main" 
      padding="1rem" 
      h={'100h'}
      w={'100%'}
      backgroundColor={'browns.500'}
      // backgroundImage={
      //  'url(https://images.unsplash.com/photo-1466133633688-187f0b492390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80)'
      //  }
      // backgroundSize={'250%'}
      // backgroundPosition={'bottom'}
      >
       <Text
        fontFamily='h3'
        fontSize={{ base: '20px', sm: '30px', md: '45px', lg: '50px' }}
        color={'browns.100'}>About Me</Text>
     <HStack ml={'40px'} mr={'40px'} mt={'40px'}>
      <Image 
        src="https://drive.google.com/uc?export=view&id=1JmFfrMb8YCs7-6c_U_07bP4RbXXZfDdn" 
        alt="Chelsea headshot"
        width={{base: '', lg: '200px'}}
        borderRadius={'full'}
        alignSelf={'start'}
        border={'solid'}
        borderColor={'browns.100'}
        borderWidth={'6px'}
        ></Image>
      <Box >
        <Text
          fontFamily='h4'
          fontSize={{ base: '13px', sm: '15px', md: '20px', lg: '30px' }}
          p={{ base:'2', sm:'2', md:'15', lg:'20' }}
          color={'browns.100'}
          // border={'ridge 1rem'}
          // borderColor={'browns.300'}
          >When I was 3 years old, I rode the pony ride at the Seattle Zoo and I was hooked. After years of relentless asking, pony-themed birthday parties, and Breyer horse toys I was finally old enough to start regular riding lessons when I was 7. 

          I went on to spend the next eleven years riding and competing up and down the West Coast on the Hunter/Jumper A circuit, until my love of the sport ultimately took me to Texas for college. My time at Trinity University///

          Born and raised in Seattle, I grew up riding horses and competing on the Hunter/Jumper A Circuit throughout the West Coast until my passion for the sport took me to Texas for college where I attended Trinity University. I adored my time in San Antonio, exploring my English degree and all that a Liberal Arts education brings. Meanwhile, I was on the Equestrian Team, and Captain of the team for three years.
          
          </Text>
      </Box>
     </HStack>
    </Box>
    );
}

{/* <img src="https://drive.google.com/uc?export=view&id=1JmFfrMb8YCs7-6c_U_07bP4RbXXZfDdn" alt="avatar"></img> */}