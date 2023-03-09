import React, { useState } from 'react';
import { Box, VStack, HStack, Text } from '@chakra-ui/react';

import NavTabs from './NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
// import Header from './Header';
import Footer from './Footer';
import '../styles/styles.css';

const styles = {
    header: {
        background:'rgba(0, 0, 0, 0.6)'
    },
    img: {
        backgroundImage: `url('https://img.freepik.com/free-photo/hand-painted-watercolor-background_24972-1973.jpg?w=1480&t=st=1667655489~exp=1667656089~hmac=8988c5cef2bb7c29f43e13c639b839e3913f02e82ae2c5a76c400684db94435f')`,
        height: '350px'
    },
};

export default function ContentContainer() {
    const [currentPage, setCurrentPage] = useState('About');
    // create home/landing page and set as default state so its there on page load

    // logic that checks which state 'currentPage' is in (ie which page it is on) and renders the corresponding page
    const renderPage = () => {
          if (currentPage === 'About') {
            return <About />;
          }
          if (currentPage === 'Contact') {
            return <Contact />;
          }
          if (currentPage === 'Portfolio') {
            return <Portfolio />;
          }
          if(currentPage === 'Resume') {
            return <Portfolio />;
          }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <>
      <Box as='header'
          //  bgGradient='linear(to-b, red.800, browns.400)'
           w={'100%'}
           h={{base:'18vh', sm:'25vh', md:'30vh', lg: '45vh'}}
           backgroundImage={
            'url(https://images.unsplash.com/photo-1466133633688-187f0b492390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80)'
           }
           backgroundSize={'cover'}
           backgroundPosition={'center 40%'}>
         <VStack 
           py={{ base: '4', lg: '5' }}
           w={'full'}
           justify={'center'}>
             <Box display={'flex'} align={'center'} justify={'center'} direction={'row'}>
                <Text
                  color={'creams.500'}
                  fontWeight={700}
                  lineHeight={1.2}
                  mt={{ base: '3', sm: '4', md: '6', lg: '8'}}
                  fontSize={{ base: '20px', sm: '33px', md: '40px', lg: '60px', xl: '70px' }}
                  textShadow={{base: '3px .5px #543315', md: '5px .5px #543315'}}
                  fontFamily='h1'
                  // pr={{ base: '3px', md: '7px', lg:'12'}}
                  >
                  Chelsea Runacres</Text>
             </Box>
             <Text display={'flex'} align={'center'} justify={'center'} direction={'row'}
               color={'browns.200'}
               mt={{md:'-.5rem', lg:'-1rem'}}
               mb={{md:'-.5rem', lg:'-1rem'}}
               fontWeight={400}
               lineHeight={1}
               fontSize={{ base: '30px', md: '65px', lg: '90px' }}
              //  textShadow='5px .5px #822727'
               fontFamily='h2'
               >
               cowgirl with a keyboard</Text>
             <Box  as='nav' display={'flex'} align={'center'} justify={'center'} direction={'row'}>
              < NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
             </Box>
         </VStack>
      </Box>
        {renderPage()}
     </>
      // <div id='clearfooter'></div>
      // <Footer />
    );
}

// <div id='container'>
      //  {/* <Header /> */}
      //  <div className="p-5 text-center header">
      //           {/* <div className="mask" style={styles.header}> */}
      //     <div className="d-flex justify-content-center align-items-center h-100">
      //       <div className="text-white">
      //         <h1 className="mb-3">Chelsea Runacres</h1>
      //         <h4 className="mb-3">cowgirl with a keyboard</h4>                 
      //         <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      //       </div>
      //     </div>
      //           {/* </div> */}
      //  </div>
       {/* <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> */}