import React from 'react';
import { Box, Text, HStack, Link, Image, Spacer } from '@chakra-ui/react';

function Contact() {
    // set state variable for form inputs
    // const [fullName, setFullName] = useState('');
    // const [email, setEmail] = useState('');
    // const [msg, setMsg] = useState('');
    const fullName = '';
    const email = '';
    const msg = '';

    // const handleInput = (e) => {
    //     // destructure name & value from the event.target
    //     const { name, value } = e.target;

    //     return name === 'fullName' ? setFullName(value) : setEmail(value)
    // };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        alert(`Thanks for your message! Chels will get back to you as soon as she can!`);
        // setEmail('');
        // setFullName('');
        // setMsg('');
    };

    return (
      <Box as="main" padding="1rem" backgroundColor={'browns.500'} h={'100vh'}>
        <HStack>
          <Text
           fontFamily='h3'
           fontSize={{ base: '20px', sm: '30px', md: '45px', lg: '50px' }}
           color={'browns.100'}>Contact</Text>
          <Text
           fontFamily={'h4'}
           fontSize={{ base: '13px', sm: '15px', md: '25px', lg: '35px' }}
           color={'browns.200'}
           pr={{ base:'2', sm:'2', md:'15', lg:'20' }}></Text>
        </HStack>
        <Box h={'10vh'}></Box>
        <HStack ml={'40'} mr={'40'}>
          <Box
            bg={'browns.400'} 
            p={'3px'} 
            border={'solid'} 
            borderColor={'creams.500'} 
            borderWidth={'3px'}
            borderRadius={'8'}
            mr={'10'}
            alignSelf={'start'}
            _hover={{ borderColor: 'creams.400'}}>
            <Link
              href='https://www.linkedin.com/in/chelsea-runacres/'
              target={'blank'}
              fontFamily={'h4'}
              textAlign={'center'}
              fontSize={{ base: '17px', sm: '25px', md: '25px', lg: '30px' }}
              p={'3'}
              _hover={{ textDecor: 'none', color: 'browns.500'}}
              _focus={{ textDecor: 'none'}}>LinkedIn</Link>
          </Box>
          <Box
            bg={'browns.400'} 
            p={'3px'} 
            border={'solid'} 
            borderColor={'creams.500'} 
            borderWidth={'3px'}
            borderRadius={'8'}
            alignSelf={'start'}
            _hover={{ borderColor: 'creams.400'}}>
            <Link
              href='https://github.com/ChelsRunnn'
              target={'blank'}
              fontFamily={'h4'}
              textAlign={'center'}
              fontSize={{ base: '17px', sm: '25px', md: '25px', lg: '30px' }}
              p={'3'}
              _hover={{ textDecor: 'none', color: 'browns.500'}}
              _focus={{ textDecor: 'none'}}>GitHub</Link>
          </Box>
          <Spacer></Spacer>
          <Image
            src='https://images.unsplash.com/photo-1582908878371-3e5e49d5d72b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvd2JveSUyMGJvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
            boxSize={{base: '250px', sm: '250px', md: '350px', lg: '500px' }}
            objectFit={'scale-down'}></Image>
        </HStack>
      </Box>
    );
};

export default Contact;
