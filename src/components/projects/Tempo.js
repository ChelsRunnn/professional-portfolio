import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    // useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Tempo() {
    return (
      <Center as={'project'} py={6}>
        <Stack as={'Card'}
          borderWidth=".5px"
          borderColor={'#D9D2D0'}
          borderRadius="lg"
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={'#D9D2D0'}
          boxShadow={'2xl'}
        //   _hover={{ boxShadow: 'dark-lg}'}}
          padding={4}>
          <Flex as={'image'} flex={1} bg="#D9D2D0">
            <Image
            //   objectFit="cover"
            //   objectPosition={'50%'}
              height={'auto'}
              maxWidth={'auto'}
              boxSize="100%"
              src={
                'https://drive.google.com/uc?export=view&id=1Zg3YTgvgIF88nSrm-vX5BMV9q6uVFpnz'}
            />
          </Flex>
          <Stack
            as={'content'}
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'} color={'#40382F'}>
              Tempo
            </Heading>
            <Text fontWeight={600} color={'#BFB6AE'} size="sm" mb={4}>
              Social Media
            </Text>
            <Text
              textAlign={'center'}
              color={'#40382F'}
              px={3}
              >
              Social media platform for musicians built around the creative process that aims to connect creators to an inspiring and empowering community
            </Text>
            <Stack as={'tech'} align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={'#BFB6AE'}
                fontWeight={'400'}>
                MySQL
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={'#BFB6AE'}
                fontWeight={'400'}>
                Express
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={'#BFB6AE'}
                fontWeight={'400'}>
                Handlebars
              </Badge>
            </Stack>
  
            <Stack
              as={'buttons'}
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}
                as={'a'}
                href={'https://github.com/ChelsRunnn/tempo'}
                target={'_blank'}
                rel={'noreferrer'}>
                GitHub
              </Button>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'#40382F'}
                color={'white'}
                as={'a'}
                href={'https://desolate-castle-93204.herokuapp.com/'}
                target={'_blank'}
                rel={'noreferrer'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}>
                Live
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }

  