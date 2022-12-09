import React from 'react'
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
import LinkButton from '../components/link-button'

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require('../assets/about-masthead.jpg')}
      >
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require('../assets/anya.jpg')}
              borderRadius="full"
              borderColor="cyan.500"
              borderWidth={3}
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          <Text fontSize="md" w="full">
            Just a custom animated todo app built with React Native!
          </Text>
          <Text fontSize="lg" w="full" fontWeight="bold" textAlign="center">
            Look at some of my work!
          </Text>
          <LinkButton
            colorScheme="teal"
            size="lg"
            borderRadius="full"
            href="https://margelo-website-cordeliasguy.vercel.app/"
            leftIcon={
              <Icon as={Feather} name="external-link" size="sm" opacity={0.5} />
            }
          >
            Margelo replica website
          </LinkButton>
          <LinkButton
            colorScheme="orange"
            size="lg"
            borderRadius="full"
            href="https://cordeliasguy-blog.vercel.app/"
            leftIcon={
              <Icon as={Feather} name="external-link" size="sm" opacity={0.5} />
            }
          >
            Astro blog
          </LinkButton>
          <Text fontSize="md" w="full">
            Wanna see some of my personal links?
          </Text>
          <LinkButton
            colorScheme="cyan"
            size="lg"
            borderRadius="full"
            href="https://bio-link-cordeliasguy.vercel.app/"
            leftIcon={
              <Icon as={Feather} name="external-link" size="sm" opacity={0.5} />
            }
          >
            Bio links
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen
