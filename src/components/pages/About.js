import React from 'react';
import { Box, Text, HStack, Image, Spacer } from '@chakra-ui/react';

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
        fontFamily='h2'
        fontSize={{ base: '20px', sm: '30px', md: '45px', lg: '50px' }}
        color={'browns.100'}
        ml={'5'}>About</Text>
     <HStack ml={'5'} mr={'45'} mt={'5'}>
      <Image 
        src="https://drive.google.com/uc?export=view&id=1JmFfrMb8YCs7-6c_U_07bP4RbXXZfDdn" 
        alt="Chelsea headshot"
        width={{base: '', lg: '300px'}}
        borderRadius={'full'}
        alignSelf={'start'}
        border={'solid'}
        borderColor={'browns.100'}
        borderWidth={'6px'}
        ></Image>
      <Box>
        <Text
          fontFamily='h4'
          fontSize={{ base: '13px', sm: '15px', md: '20px', lg: '30px' }}
          pl={{ base:'2', sm:'2', md:'15', lg:'20' }}
          pr={{ base:'2', sm:'2', md:'15', lg:'20' }}
          color={'browns.100'}
          textAlign={'justify'}
          // border={'ridge 1rem'}
          // borderColor={'browns.300'}
          >Chelsea was born and raised in Seattle, Washington. Her love of horses was discovered at the age of 3 when she rode the pony ride at the local Zoo. Chelsea was lucky enough to grow up competing at the top levels of the Hunter/Jumper world throughout the West Coast. 
          <Spacer h={'3'}></Spacer>
          <HStack>
          <Image 
           src="https://www.dropbox.com/s/jxtnzimdbiu1e4p/AR6U0809.jpg?raw=1" 
           alt="chelsea jumping a horse at a show"
           width={{base: '', lg: '400px'}}
          //  borderRadius={'150'}
           align={'end'}
           border={'solid'}
           borderColor={'browns.100'}
           borderWidth={'2px'}
        ></Image>
        <Spacer></Spacer>
        <Image 
           src="https://www.dropbox.com/s/blnuh8swqrlnlzl/AR6U7197%20%281%29%20%28edited%29.jpg?raw=1" 
           alt="chelsea jumping a horse at a show"
           width={{base: '', lg: '400px'}}
          //  borderRadius={'150'}
           align={'end'}
           border={'solid'}
           borderColor={'browns.100'}
           borderWidth={'2px'}
        ></Image>
        </HStack>
          When she wasn't at the barn, she spent time outside of the city at a family cabin in Eastern Washington, filling her days dirt biking, snowmobiling, and nurturing her love of fly fishing. Some of her favorite memories are the hours spent wading around the Yakima River alongside her dad, getting her line tangled and learning (through a <strong>lot</strong> of practice) how to free snagged hooks without disturbing the best holes. 
          <Spacer h={'3'}></Spacer>
          Collegiate riding took Chelsea to Texas for College, where she attended Trinity University. She quickly found a home on the Equestrian Team, and was honored to be Team Captain for 3 years. Chelsea adored her Liberal Arts education, exploring all that a humanities degree can bring, ultimately receiving a Bachelor of Arts in English. 
          <Spacer h={'3'}></Spacer>
          <HStack>
          <Image 
           src="https://www.dropbox.com/s/arvruqoahmtwlv1/AR6U9742.jpg?raw=1" 
           alt="chelsea jumping a horse at a show"
           width={{base: '', lg: '250px'}}
          //  borderRadius={'150'}
           align={'end'}
           border={'solid'}
           borderColor={'browns.100'}
           borderWidth={'2px'}
        ></Image>
         <Image 
           src="https://www.dropbox.com/s/p0ifrffaerigvv5/IMG_6511%20%28edited%29.png?raw=1" 
           alt="chelsea jumping a horse at a show"
           width={{base: '', lg: '300px'}}
          //  borderRadius={'150'}
           align={'end'}
           border={'solid'}
           borderColor={'browns.100'}
           borderWidth={'2px'}
        ></Image>
        <Image 
           src="https://www.dropbox.com/s/o1gb012e2pvpl8z/C2248438-FD9A-4123-89FF-E48F1D39082E.JPG?raw=1" 
           alt="chelsea jumping a horse at a show"
           width={{base: '', lg: '300px'}}
          //  borderRadius={'150'}
           align={'end'}
           border={'solid'}
           borderColor={'browns.100'}
           borderWidth={'2px'}
        ></Image>
        </HStack>
          After graduating in 2018, Chelsea moved back to Seattle to pursue her dream of riding and coaching professionally. Chelsea has continued to work either full- or part-time for Novella Farms since her initial jump into the industry as a professional. 
          <Spacer h={'3'}></Spacer>
          After some self-teaching, Chelsea decided to explore a more formal education into web development and attended the University of Pennsylvania's Full Stack Web Development Boot Camp. Chelsea finds the creativity and challenge of web development invigorating and is thrilled for her career in the tech industry to begin.
          <Spacer h={'3'}></Spacer>
          Chelsea recently relocated to Philadelphia, PA. Where she is happily exploring all the new adventures that the East Coast brings. She is excited for her first fishing season to open this Spring, enjoying riding for fun, and has recently added rock climbing to her list of favorite outdoor activities. 
          </Text>
      </Box>
     </HStack>
    </Box>
    );
}

{/* <img src="https://drive.google.com/uc?export=view&id=1JmFfrMb8YCs7-6c_U_07bP4RbXXZfDdn" alt="avatar"></img> */}