import React from 'react';
import { Box, Link } from '@chakra-ui/react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
      <Box>
        <Link 
            href="#about"
            onClick={() => handlePageChange('About')}
            mr={'1rem'}
            color={'browns.100'}
            fontFamily='h3'
            fontWeight={700}
            fontSize={{ base: '14px', sm: '18px', md: '20px', lg: '20px' }}
            _hover={{ color: 'browns.500', textDecoration: 'none'}}
           > 
            About Me |
        </Link>
        <Link
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            mr={'1rem'}
            color={'browns.100'}
            fontFamily='h3'
            fontWeight={700}
            fontSize={{ base: '14px', sm: '18px', md: '20px', lg: '20px' }}
            _hover={{ color: 'browns.500', textDecoration: 'none'}}
            // className={currentPage === 'Portfolio' ? 'custom-nav-link active' : 'custom-nav-link'}
          >
            Portfolio |
        </Link>
        <Link
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            mr={'1rem'}
            color={'browns.100'}
            fontFamily='h3'
            fontWeight={700}
            fontSize={{ base: '14px', sm: '18px', md: '20px', lg: '20px' }}
            _hover={{ color: 'browns.500', textDecoration: 'none'}}
            // className={currentPage === 'Contact' ? 'custom-nav-link active' : 'custom-nav-link'}
          >
            Contact Me |
        </Link>
        <Link
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            color={'browns.100'}
            fontFamily='h3'
            fontWeight={700}
            fontSize={{ base: '14px', sm: '18px', md: '20px', lg: '20px' }}
            _hover={{ color: 'browns.500', textDecoration: 'none'}}
            // className={currentPage === 'Resume' ? 'custom-nav-link active' : 'custom-nav-link'}
          >
            Resume 
        </Link>
      </Box>
    )
};

export default NavTabs;