import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import { useBreakpointValue } from "@chakra-ui/react";

const projects = [
  {
    title: "Kieler Immobilie",
    description: "A Real Estate App was created with React ,react-router-dom ",
    getImageSrc: () => require("../images/hausdetailedpage.png"),
    srcLink: "https://github.com/onurtufekci34/kielerimmobilieapp",
  },
  {
    title: "Kieler Tech Shop",
    description:
      "An E-Commerce Web App created with PHP,jQuery,Bootstrap and MySQL",
    getImageSrc: () => require("../images/kieltechshop.png"),
    srcLink: "https://github.com/onurtufekci34/KielTechShop",
  },
  {
    title: "Kieler Chat App",
    description:
      "A chat app created with React, react-router-dom, Firebase",
    getImageSrc: () => require("../images/kielerchatapp.png"),
    srcLink: "https://kielerchatapp.netlify.app/",
  },
  {
    title: "Kieler Little Lemon",
    description:
      "A Restaurant Web App with Table Reservation created with React and fakeApi",
    getImageSrc: () => require("../images/restaurant.png"),
    srcLink: "https://kielerlittlelemon.netlify.app/",
  },
  {
    title: "Airbnb Experience",
    description:
      "An Airbnb Experience Web App created with React, Fake data and Vite",
    getImageSrc: () => require("../images/airbnbexample.png"),
    srcLink: "https://kielerairbnb.netlify.app/",
  },
  {
    title: "Kieler Autos",
    description:
      "A Vehicle Web App to calculate payment plan created with PHP and some css",
    getImageSrc: () => require("../images/kielerautos.png"),
    srcLink: "https://github.com/onurtufekci34/kielerautos",
  },
];

const ProjectsSection = () => {
  const columnCount = useBreakpointValue({ base: 1, md: 2, lg: 3 });


  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={`repeat(${columnCount}, minmax(0, 1fr))`}
        gridGap={8}
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        style={{width:"100%",height:"auto"}}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            srcLink={project.srcLink}
            width="100%" 
            height="auto" 
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
