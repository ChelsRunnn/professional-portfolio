import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Box, Image } from '@chakra-ui/react';

const AfterAftersCar = () => (
    <Box
    //   boxSize={{base: '250px', sm: '250px', md: '350px', lg: '400px' }}
      bg={'browns.200'}
      border={'solid'}
      borderColor={'browns.200'}
      borderWidth={8}
      borderRadius={6}
      w={['100%', '50%']}
    //   h={'auto'}
      >
        <Carousel 
            autoPlay 
            showStatus={false} 
            showThumbs={false}
            stopOnHover={true}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={100}
            dynamicHeight={true}
            transitionTime={900}
            // h={'100px'}
            // w={'auto'}
            >
            <div>
            <Image alt="" 
              src="https://drive.google.com/uc?export=view&id=1uxfZMauEuurW86MlIa_0V3ZBxLUsCWX8"
              objectFit="contain" 
              h={'400px'}
            //   w={'auto'}
              />
            </div>
            <div>
            <Image alt="" src="https://drive.google.com/uc?export=view&id=1FHPGnmZcNOEQ9WpQMRE4tPKhAYGyOsPW" objectFit="contain" h={'400px'}
            //   w={'auto'} 
              />
            </div>
            <div>
            <Image alt="" src="https://drive.google.com/uc?export=view&id=1pENFd8_s3q6we_nLyyDjWfE2PaOtdjse" objectFit="contain" h={'400px'}
            //   w={'auto'}
              />
            </div>
        </Carousel>
    </Box>
);

export default AfterAftersCar;