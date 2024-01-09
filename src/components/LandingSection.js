import React from "react";
import { Heading, VStack, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { LazyLoadImage } from "react-lazy-load-image-component"; // Import LazyLoadImage
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional CSS for image transition

import avatarImage from "../images/1.png";

const greeting = "Hello, I am Onur!";
const bio1 =
  "A Fullstack Web Developer with a background in electrical engineering and project management.";
const bio2 =
  "Tech Stack:JavaScript, React, Redux, React Router, NodeJs, MongoDB, ExpressJs CSS, Bootstrap, Material, Chakra, SASS, RESTful APIs, Postman, Vite, Java, PHP, MySQL, Firebase, VsCode, Linux";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={3}>
      <LazyLoadImage
        effect="blur"
        src={avatarImage}
        alt="Onur"
        style={{
          borderRadius: "50%",
          marginTop: "2rem",
          width: "100%",
          height: "auto",
        }}
      />

      <Heading as="h1" color="white" textAlign="center">
        {greeting}
      </Heading>
      <Heading as="h2" color="white" textAlign="center" fontSize="xl">
        {bio1}
      </Heading>
      <Heading as="h2" color="white" textAlign="center" fontSize="xl">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
