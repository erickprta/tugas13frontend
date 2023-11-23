import { Box, Center, Flex, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Movie = (props) => {
    const { item } = props
    const url_image = `https://image.tmdb.org/t/p/w300/${item.poster_path}`
    const bg_image = `https://image.tmdb.org/t/p/w300/${item.backdrop_path}`
    
    console.log(item)

    return (
        <Center py={6} m={5}>
          <Box
            w={'300px'}
            height={'450px'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            src={
              bg_image
            }
            overflow={'hidden'}>
            <Image
              h={'150px'}
              w={'full'}
              src={
                bg_image
              }
              objectFit="cover"
              alt="#"
            />
    
            <Box p={6}>
              <Stack spacing={0} align={'center'} mb={5}>
                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                  {item.title}
                </Heading>
                <Text color={'gray.500'}>{item.release_date}</Text>
              </Stack>
    
              <Stack direction={'row'} alignItems={'center'} spacing={6}mb={5}>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600}>23k</Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                    Followers
                  </Text>
                </Stack>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600}>23k</Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                    {}
                  </Text>
                </Stack>
              </Stack>
    
              <Link to={`/movie/${item.id}`}>
                <Button variant="secondary">Watch</Button>
              </Link>
            </Box>
          </Box>
        </Center>
      )
}


export default Movie;