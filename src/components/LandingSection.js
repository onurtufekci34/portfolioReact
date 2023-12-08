import React from "react";
import { Heading, VStack, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { LazyLoadImage } from "react-lazy-load-image-component"; // Import LazyLoadImage
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional CSS for image transition

import avatarImage from "../images/1.png";

const greeting = "Hello, I am Onur!";
const bio1 = "A Self-Taught Software Engineer";
const bio2 = "specialised in";
const bio3 = "Fullstack Web Development";
const bio4 =
  "Tech Stack:JavaScript, React, Redux, React Router, CSS, Bootstrap, Material, Chakra, SASS, RESTful API, Postman, Vite, Java, PHP, MySQL, Firebase, VsCode, Linux";

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
        style={{ borderRadius: "50%",marginTop:"2rem",width:"100%",height:"auto" }}        
      />

      <Heading as="h1" color="white" textAlign="center">
        {greeting}
      </Heading>
      <Heading as="h2" color="white" textAlign="center" fontSize="xl">
        {bio1}
      </Heading>
      <Heading as="h2" color="white" textAlign="center" fontSize="xl">
        {bio2}{" "}
        <span className="font-effect-fire" style={{ fontSize: "30px" }}>
          {bio3}
        </span>
      </Heading>
      <Heading as="h2" color="white" textAlign="center" fontSize="xl">
        {bio4}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
