import { Box,  Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/f3.jpg';
import img2 from '../Assets/f5.jpg';
import img3 from '../Assets/f2.webp';
import img4 from '../Assets/per1.jpg';
import img5 from '../Assets/per2.jpeg';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '3xl',
};

const Home = () => {
  return (
    
    <Box>
     <div className="center-container">
  <h1 style={{ textAlign: 'center', fontSize: '50px', backgroundColor: 'black', color: 'pink', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
    FINVIDEO STORE
  </h1>
</div>


      
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['20', '200']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
           Welcome to our comprehensive financial video library, where knowledge meets convenience. Explore a wide array of educational and insightful videos tailored to help you navigate the complex world of finance with confidence.

Our curated collection covers a spectrum of topics, including personal finance, investment strategies, budgeting tips, retirement planning, and much more. Whether you're a seasoned investor seeking to refine your skills or a novice looking to build a strong financial foundation, our library has something for everyone.

With easy access to high-quality content, you can learn at your own pace, on your own schedule. Stay informed, make informed decisions, and empower yourself to achieve your financial goals.

Start your journey to financial success today with our enriching video resources.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={true}
    showArrows={true}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
      Look Ahead, India's Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.700'} color={'lightblue'} {...headingOptions} >
      India's Economy Soars to New Heights
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
      Shifting Tides: World Economic Trends
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} >
      Invest in Yourself and Your Financial Future"
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
