import React from 'react';
import { Box, Text, Stack, HStack, VStack, SimpleGrid, Image, Button, Spacer, Flex } from '@chakra-ui/react';
import AfterAftersCar from '../../utils/carousel';

const imgs = [{
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
    <Box as="main" padding="1rem" backgroundColor={'browns.500'}>
      <Box bg={'browns.400'} p={3} borderRadius={6}>
        <Flex bg={'browns.300'} p={3} borderRadius={6} direction={['column', 'column', 'column', 'row']} gap={5} justifyItems={'center'}>
            <AfterAftersCar justifySelf={'center'} />
            <Spacer />
            <VStack alignSelf={'center'} gap={5} w={'50%'}>
              <Text
                alignSelf={'center'}
                textAlign={'even'}
                fontFamily={'h4'}
                color={'creams.100'}
                bg={'browns.200'}
                border={'solid'}
                borderColor={'browns.200'}
                borderWidth={8}
                borderRadius={6}
                // align={'center'}
                >Frontend Philly-centric entertainment app that connects users to upcoming events with the ability to save favorites and see food options nearby the events venue</Text>
              <Spacer />
               <HStack>
                <Button 
                  as={'a'}
                  href={'https://chelsrunnn.github.io/after-afters/'}
                  target={'_blank'}
                  rel={'noreferrer'}
                  fontFamily={'h1'}
                  color={'creams.100'} 
                  bg={'browns.200'}
                  _hover={{ bg:'browns.100', color:'creams.100'}}
                  _active={{ bg:'browns.100', color:'creams.100'}}>Live Link</Button>
                <Button 
                  as={'a'}
                  href={'https://github.com/ChelsRunnn/after-afters'}
                  target={'_blank'}
                  rel={'noreferrer'}
                  fontFamily={'h1'}
                  color={'creams.100'} 
                  variant='outline' 
                  border={'solid'}
                  borderColor={'browns.200'}
                  borderWidth={3}
                  _hover={{ borderColor:'browns.100', color:'creams.100'}}
                  _active={{ borderColor:'browns.100', color:'creams.100'}}>GitHub</Button>
              </HStack>
            </VStack>
        </Flex>
      </Box>
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
     <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} spacing={5} mr={'20px'} ml={'20px'}>
       <Box 
         color={'white'} 
         bg={'browns.400'} 
         p={'3px'} 
         border={'solid'} 
         borderColor={'creams.500'} 
         borderWidth={'5px'}
         _hover={{ borderColor: 'creams.400'}}>
          <Text
           fontFamily='h3'
           textAlign={'center'}
           fontSize={{ base: '17px', sm: '25px', md: '25px', lg: '35px' }}
          >After Afters</Text>
          <Box bg={'browns.400'} display={'flex'} justifyContent={'center'} p={'3px'}>
            <Image 
              src='https://drive.google.com/uc?export=view&id=1uxfZMauEuurW86MlIa_0V3ZBxLUsCWX8'
              boxSize={{base: '250px', sm: '250px', md: '350px', lg: '400px' }}
              borderRadiusTop={'7px'}
              mt='1'
            />
          </Box>
          <Box color={"white"} bg={'browns.400'} mt={'2px'}
          // borderWidth="3px" bgRadius='7px'
          >
            <Text 
              fontFamily='h4'
              textAlign={'center'}
              fontSize={{ base: '14px', sm: '14px', md: '18px', lg: '18px' }}
            >Frontend Philly-centric entertainment app that connects users to upcoming events with the ability to save favorites and see food options nearby the event’s venue</Text>
          </Box> 
       </Box>
       <Box 
         color={'white'} 
         bg={'browns.400'} 
         p={'3px'} 
         border={'solid'} 
         borderColor={'creams.500'} 
         borderWidth={'5px'}
         _hover={{ borderColor: 'creams.400'}}>
          <Text
           fontFamily='h3'
           textAlign={'center'}
           fontSize={{ base: '17px', sm: '25px', md: '25px', lg: '35px' }}
          >Terminus</Text>
          <Box bg={'browns.400'} display={'flex'} justifyContent={'center'} p={'3px'}>
            <Image 
              src='https://drive.google.com/uc?id=1Y7H8pk6A3W0Ge2JjPyyKCOvCg9VICHAl'
              boxSize={{base: '250px', sm: '250px', md: '350px', lg: '400px' }}
              borderRadiusTop={'7px'}
              mt='1'
            />
          </Box>
          <Box color={"white"} bg={'browns.400'} mt={'2px'}
          // borderWidth="3px" bgRadius='7px'
          >
            <Text 
              fontFamily='h4'
              textAlign={'center'}
              fontSize={{ base: '14px', sm: '14px', md: '18px', lg: '18px' }}
              objectPosition={'relative'}
            >Zombie-themed e-commerce store utilizing Stripe with future development potential of a gamified social platform</Text>
          </Box> 
       </Box>
       <Box 
         color={"white"} 
         bg={'browns.400'} 
         p={'3px'} border={'solid'} 
         borderColor={'creams.500'} 
         borderWidth={'5px'}
         _hover={{ borderColor: 'creams.400'}}>
          <Text
           fontFamily='h3'
           textAlign={'center'}
           fontSize={{ base: '17px', sm: '25px', md: '25px', lg: '35px' }}
          >Tempo</Text>
          <Box bg={'browns.400'} display={'flex'} justifyContent={'center'} p={'3px'}>
            <Image 
              src='https://drive.google.com/uc?export=view&id=1Zg3YTgvgIF88nSrm-vX5BMV9q6uVFpnz'
              boxSize={{base: '250px', sm: '250px', md: '350px', lg: '400px' }}
              borderRadiusTop={'7px'}
              mt='1'
            />
          </Box>
          <Box color={"white"} bg={'browns.400'} mt={'2px'}
          // borderWidth="3px" bgRadius='7px'
          >
            <Text 
              fontFamily='h4'
              textAlign={'center'}
              fontSize={{ base: '14px', sm: '14px', md: '18px', lg: '18px' }}
            >Social media platform for musicians built around the creative process that aims to connect creators to an inspiring and empowering community</Text>
          </Box> 
       </Box>
       <Box 
         color={"white"} 
         bg={'browns.400'} 
         p={'3px'} border={'solid'} 
         borderColor={'creams.500'} 
         borderWidth={'5px'}
         _hover={{ borderColor: 'creams.400'}}>
          <Text
           fontFamily='h3'
           textAlign={'center'}
           fontSize={{ base: '17px', sm: '25px', md: '25px', lg: '35px' }}
          >Express Note Taker</Text>
          <Box bg={'browns.400'} display={'flex'} justifyContent={'center'} p={'3px'}>
            <Image 
              src='https://drive.google.com/uc?export=view&id=1iYDlr2ceIl07E7OvZvLJ67Kr5ziPu6MX'
              boxSize={{base: '250px', sm: '250px', md: '350px', lg: '400px' }}
              borderRadiusTop={'7px'}
              mt='1'
            />
          </Box>
          <Box color={"white"} bg={'browns.400'} mt={'2px'}
          // borderWidth="3px" bgRadius='7px'
          >
            <Text 
              fontFamily='h4'
              textAlign={'center'}
              fontSize={{ base: '14px', sm: '14px', md: '18px', lg: '18px' }}
            >Store all your notes quickly and easily within an unfussy, sleek app. Utilizes an Express.JS backend. Notes can be stored locally and deleted on-click.</Text>
          </Box> 
       </Box>
       <Box 
         color={"white"} 
         bg={'browns.400'} 
         p={'3px'} border={'solid'} 
         borderColor={'creams.500'} 
         borderWidth={'5px'}
         _hover={{ borderColor: 'creams.400'}}>
          <Text
           fontFamily='h3'
           textAlign={'center'}
           fontSize={{ base: '17px', sm: '25px', md: '25px', lg: '35px' }}
          >Daily Scheduler</Text>
          <Box bg={'browns.400'} display={'flex'} justifyContent={'center'} p={'3px'}>
            <Image 
              src='https://drive.google.com/uc?export=view&id=1usa9jlaM8rFU7gyLfzVnBtg2FawexLSn'
              boxSize={{base: '250px', sm: '250px', md: '350px', lg: '400px' }}
              borderRadiusTop={'7px'}
              mt='1'
            />
          </Box>
          <Box color={"white"} bg={'browns.400'} mt={'2px'}
          // borderWidth="3px" bgRadius='7px'
          >
            <Text 
              fontFamily='h4'
              textAlign={'center'}
              fontSize={{ base: '14px', sm: '14px', md: '18px', lg: '18px' }}
            >A great space to save tasks, appointments, and time-sensitive notes. Taking into account the current time and date, the schedule updates throughout the day so that the current hour is always reflected correctly. </Text>
          </Box> 
       </Box>
       <Box 
         color={"white"} 
         bg={'browns.400'} 
         p={'3px'} border={'solid'} 
         borderColor={'creams.500'} 
         borderWidth={'5px'}
         _hover={{ borderColor: 'creams.400'}}>
          <Text
           fontFamily='h3'
           textAlign={'center'}
           fontSize={{ base: '17px', sm: '25px', md: '25px', lg: '35px' }}
          >Password Generator</Text>
          <Box bg={'browns.400'} display={'flex'} justifyContent={'center'} p={'3px'}>
            <Image 
              src='https://drive.google.com/uc?export=view&id=19fAnpHi3MVf1_u5sKcwq9O9BH_326DZT'
              boxSize={{base: '250px', sm: '250px', md: '350px', lg: '400px' }}
              borderRadiusTop={'7px'}
              mt='1'
            />
          </Box>
          <Box color={"white"} bg={'browns.400'} mt={'2px'}
          // borderWidth="3px" bgRadius='7px'
          >
            <Text 
              fontFamily='h4'
              textAlign={'center'}
              fontSize={{ base: '14px', sm: '14px', md: '18px', lg: '18px' }}
            >To increase password security, this app is perfect for employees that handle sensitive or confidential information, or for individuals want specific passwords for their numerous logins without having to think of unique combinations on their own.</Text>
          </Box> 
       </Box>
       <Box
         color={"white"} 
         bg={'browns.400'} 
         p={'3px'} border={'solid'} 
         borderColor={'creams.500'} 
         borderWidth={'5px'}
         _hover={{ borderColor: 'creams.400'}}>
          <Text
           fontFamily='h3'
           textAlign={'center'}
           fontSize={{ base: '17px', sm: '25px', md: '25px', lg: '35px' }}
          >Cowboy Quiz</Text>
          <Box bg={'browns.400'} display={'flex'} justifyContent={'center'} p={'3px'}>
            <Image 
              src='https://drive.google.com/uc?export=view&id=1gcJoK1AaJVjRyZOUTV45HjK7KXMdA0iq'
              boxSize={{base: '250px', sm: '250px', md: '350px', lg: '400px' }}
              borderRadiusTop={'7px'}
              mt='1'
            />
          </Box>
          <Box color={"white"} bg={'browns.400'} mt={'2px'}
          // borderWidth="3px" bgRadius='7px'
          >
            <Text 
              fontFamily='h4'
              textAlign={'center'}
              fontSize={{ base: '14px', sm: '14px', md: '18px', lg: '18px' }}
            >Do you dream of a home, home on the range? Have you always wanted a trusty steed to ride off into the sunset? Well take this quiz to prove your cowboy cred and see how you measure up to the toughest wranglers in the West!</Text>
          </Box> 
       </Box>
     </SimpleGrid>


      {/* <div className='row spacer'>
        <div className='col-sm custom-wrap'>
          <div className='custom-card'>
            <a href='https://desolate-castle-93204.herokuapp.com/' className='proj'>Tempo</a>
            <img className='img-fluid' src="https://drive.google.com/uc?export=view&id=1Zg3YTgvgIF88nSrm-vX5BMV9q6uVFpnz" alt='screenshot of note taker app'/>
            <a href='https://github.com/ChelsRunnn/tempo' className='projLink'>GitHub</a>
          </div>
        </div>
        <div className='col-sm custom-wrap'>
          <div className='custom-card'>
            <a href='https://antced.github.io/after-afters/' className='proj'>After Afters</a>
            <img className='img-fluid' src="https://drive.google.com/uc?export=view&id=1uxfZMauEuurW86MlIa_0V3ZBxLUsCWX8" alt='screenshot of note taker app'/>
            <a href='https://github.com/ChelsRunnn/after-afters' className='projLink'>GitHub</a>
          </div>
        </div>
        <div className='col-sm custom-wrap'>
          <div className='custom-card'>
            <a href='https://murmuring-sands-54732.herokuapp.com/' className='proj'>Express Note Taker</a>
            <img className='img-fluid' src="https://drive.google.com/uc?export=view&id=1iYDlr2ceIl07E7OvZvLJ67Kr5ziPu6MX" alt='screenshot of note taker app'/>
            <a href='https://github.com/ChelsRunnn/note-taker' className='projLink'>GitHub</a>
          </div>
        </div>
      </div>
      <div className='row spacer'>
        <div className='col-sm custom-wrap'>
          <div className='custom-card'>
            <a href='https://chelsrunnn.github.io/work-day-scheduler/' className='proj'>Daily Scheduler</a>
            <img className='img-fluid' src="https://drive.google.com/uc?export=view&id=1usa9jlaM8rFU7gyLfzVnBtg2FawexLSn" alt='screenshot of note taker app'/>
            <a href='https://github.com/ChelsRunnn/work-day-scheduler' className='projLink'>GitHub</a>
          </div>
        </div>
        <div className='col-sm custom-wrap'>
          <div className='custom-card proj-card'>
            <a href='https://chelsrunnn.github.io/random-password-generator/' className='proj'>Password Generator</a>
            <img className='img-fluid' src="https://drive.google.com/uc?export=view&id=19fAnpHi3MVf1_u5sKcwq9O9BH_326DZT" alt='screenshot of note taker app'/>
            <a href='https://github.com/ChelsRunnn/random-password-generator' className='projLink'>GitHub</a>
          </div>
        </div>
        <div className='col-sm custom-wrap'>
          <div className='custom-card'>
            <a href='https://chelsrunnn.github.io/code-quiz-js-fundamentals/' className='proj'>Cowboy Quiz</a>
            <img className='proj-img img-fluid' src="https://drive.google.com/uc?export=view&id=1gcJoK1AaJVjRyZOUTV45HjK7KXMdA0iq" alt='screenshot of note taker app'/>
            <a href='https://github.com/ChelsRunnn/random-password-generator' className='projLink'>GitHub</a>
          </div>
        </div>
      </div> */}
     {/* </div> */}
    </Box>
    );
}

export default Portfolio;