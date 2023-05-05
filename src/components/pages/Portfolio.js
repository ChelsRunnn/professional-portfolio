import React from 'react';
import { Box, Text, Stack, HStack, VStack, SimpleGrid, Image, Button, Spacer, Flex } from '@chakra-ui/react';
import AfterAftersCar from '../../utils/carousel';
import AfterAfters from '../projects/AfterAfters';
import Terminus from '../projects/Terminus';
import Tempo from '../projects/Tempo';
import CowboyQuiz from '../projects/CowbowQuiz';

const imgs = [
  {
    name: 'noteTaker',
    id: 'AF1QipNSjOm_kyW3e8iQ8XiCxn3xB9rLIceoOyOdZwbj'
},
{
    name: 'tempo',
    id: '1Zg3YTgvgIF88nSrm-vX5BMV9q6uVFpnz'
},
{
    name: 'afterAfters',
    id: '1uxfZMauEuurW86MlIa_0V3ZBxLUsCWX8'
},
{  
    name: 'dailyScheduler',
    id: '1usa9jlaM8rFU7gyLfzVnBtg2FawexLSn'
},
{
    name: 'cowboyQuiz',
    id: '1gcJoK1AaJVjRyZOUTV45HjK7KXMdA0iq'
},
{
    name: 'pwGenerator',
    id: '19fAnpHi3MVf1_u5sKcwq9O9BH_326DZT'
}
];

const Portfolio = () => {
  const projects = [
    {
      'name':'AfterAfters',
      'img': 'https://drive.google.com/uc?export=view&id=1uxfZMauEuurW86MlIa_0V3ZBxLUsCWX8',
      'info': "Frontend Philly-centric entertainment app that connects users to upcoming events with the ability to save favorites and see food options nearby the event’s venue",
      'link': 'https://ChelsRunnn.github.io/after-afters/',
      'gitHub': 'https://github.com/ChelsRunnn/after-afters'
    },
    {
      'name':'Tempo',
      'img': 'https://drive.google.com/uc?export=view&id=1Zg3YTgvgIF88nSrm-vX5BMV9q6uVFpnz',
      'info': "Social media platform for musicians built around the creative process that aims to connect creators to an inspiring and empowering community",
      'link': 'https://desolate-castle-93204.herokuapp.com/',
      'gitHub': 'https://github.com/ChelsRunnn/tempo'
    },
  ]

    return (
    <Box as="main" padding="1rem" backgroundColor={'#BFB6AE'}>
     {/* <HorizontalCard /> */}
     <HStack>
       <Text
        fontFamily='h3'
        fontSize={{ base: '20px', sm: '30px', md: '45px', lg: '50px' }}
        color={'browns.100'}>Portfolio</Text>
       <Text
        fontFamily='h4'
        fontSize={{ base: '13px', sm: '20px', md: '30px', lg: '45px' }}
        color={'greys.200'}
        pr={{ base:'2', sm:'2', md:'15', lg:'20' }}></Text>
     </HStack>
     <SimpleGrid columns={{sm: 1, lg: 2}} 
    //  spacing={3} mr={'auto'} ml={'auto'}
     >
      
       <AfterAfters />
       <Terminus />
       <Tempo />
       <CowboyQuiz />
     </SimpleGrid>
    </Box>
    );
}

export default Portfolio;