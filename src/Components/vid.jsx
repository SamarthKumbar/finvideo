import React, { useState } from 'react';
import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';

const Videos = () => {
  const videosArr = [
    { id: 'c00eeJAA-uo', type: 'Finance Podcasts' },
    { id: 'p4ht500K-dU', type: 'Finance Podcasts' },
    {id:'dZ06UKEkXp8',type:'Personal Finance'},
    {id:'4j2emMn7UaI',type:'Personal Finance'},
    {id:'_nIymbADIWE',type:'Indian Economy'},
    {id:'PZ9__FZQyao',type:'Indian Economy'},
    {id:'6muWpqVV-VI',type:'World Economic Trends'},
    {id:'pQCJmxEOzhs',type:'World Economic Trends'},
    
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0].id);

  const filterVideosByType = (type) => {
    return videosArr.filter(video => video.type === type);
  };

  return (
    <Stack direction={['column', 'row']} h={'100vh'} align={'center'}>
      <VStack w={'full'}>
        <iframe
          title="YouTube video player"
          width="700"
          height="400"
          src={`https://www.youtube.com/embed/${videoSrc}`}
          frameBorder="10px"
          allowFullScreen
        ></iframe>

        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Video Description</Heading>
          <Text>
            These are some of the sample videos.
          </Text>
        </VStack>
      </VStack>
      <Stack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p="8"
        spacing={'8'}
        overflowY={'auto'}
      >
        <VStack alignItems={'stretch'} spacing={2}>
          <Heading fontSize={30}>Type: Finance Podcasts</Heading>
          {filterVideosByType('Finance Podcasts').map((item, index) => (
            <Button
              key={index}
              variant={'ghost'}
              colorScheme={'purple'}
              onClick={() => setVideoSrc(item.id)}
            >
              Finance Podcasts {index + 1}(click me)
            </Button>
          ))}
        </VStack>
        <VStack alignItems={'centre'} spacing={2}>
          <Heading fontSize={30}>Type: Personal Finance</Heading>
          {filterVideosByType('Personal Finance').map((item, index) => (
            <Button
              key={index}
              variant={'ghost'}
              colorScheme={'purple'}
              onClick={() => setVideoSrc(item.id)}
            >
              Personal Finance {index + 1}(click me)
            </Button>
          ))}
        </VStack>
        <VStack alignItems={'stretch'} spacing={2}>
          <Heading fontSize={30}>Type: Indian Economy</Heading>
          {filterVideosByType('Indian Economy').map((item, index) => (
            <Button
              key={index}
              variant={'ghost'}
              colorScheme={'purple'}
              onClick={() => setVideoSrc(item.id)}
            >
              Indian Economy {index + 1}(click me)
            </Button>
          ))}
        </VStack>
        <VStack alignItems={'stretch'} spacing={2}>
          <Heading fontSize={25}>Type: World Economic Trends</Heading>
          {filterVideosByType('World Economic Trends').map((item, index) => (
            <Button
              key={index}
              variant={'ghost'}
              colorScheme={'purple'}
              onClick={() => setVideoSrc(item.id)}
            >
             World Economic Trends {index + 1}(click me)
            </Button>
          ))}
        </VStack>
        
        
      </Stack>
    </Stack>
  );
};

export default Videos;
