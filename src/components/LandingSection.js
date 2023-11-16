import React from "react";
import { Heading, VStack,Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { LazyLoadImage } from 'react-lazy-load-image-component'; // Import LazyLoadImage
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional CSS for image transition

import avatarImage from "../images/1.png";

const greeting = "Hello, I am Onur!";
const bio1 = "A Self-Taught Frontend Developer";
const bio2 = "specialised in";
const bio3 = "REACT";
const bio4 = "Tech Stack: React, Redux, JavaScript, CSS, Bootstrap, Material, Chakra, SASS, APIs, Java, PHP, MySQL, Firebase, Linux"

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
    <LazyLoadImage
        effect="blur" // Optional - adds a blur effect while loading
        src={avatarImage}
        alt="Onur"
        width="250px"
        height="250px"
        style={{ borderRadius: "50%" }}
      />
      
      <Heading as="h1" color="white" textAlign="center">
        {greeting}
      </Heading>
      <Heading as="h2" color="white" textAlign="center" fontSize="xl">
        {bio1}
      </Heading>
      <Heading  as="h2" color="white" textAlign="center" fontSize="xl">
        {bio2} <span className="font-effect-fire" style={{fontSize:"30px"}}>{bio3}</span>
      </Heading>
      <Heading as="h2" color="white" textAlign="center" fontSize="xl">
        {bio4}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
