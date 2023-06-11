import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";


const projects = [
  {
    title: "React Basic E-Commerce",
    description:
      "A basic e-commerce App was created with React",
    getImageSrc: () => require("../images/react.png"),
    srcLink:"https://onursfirstreactproject.netlify.app/",
  },
  {
    title: "Calculator with JavaScript",
    description:
      "A basic calculator was created with vanillajs",
    getImageSrc: () => require("../images/calculator.png"),
    srcLink:"https://kielercalculator.netlify.app/",
  },
  {
    title: "Tik Tac Toe",
    description:
      "A tik tac toe game was created with javascript ",
    getImageSrc: () => require("../images/tiktactoe.png"),
    srcLink:"https://kielertiktactoe.netlify.app/",
  },
  {
    title: "ToDo App",
    description:
      "A ToDo app game was created with javascript",
    getImageSrc: () => require("../images/todo.png"),
    srcLink:"https://kielertodoapp.netlify.app/",
  },
  {
    title: "Random Joke Generator",
    description:
      "A joke generator app game was created with js",
    getImageSrc: () => require("../images/joke.png"),
    srcLink:"https://kielerrandomjokegenerator.netlify.app/",
  },
  {
    title: "Stopwatch",
    description:
      "A stopwatch app game was created with js",
    getImageSrc: () => require("../images/stopwatch.png"),
    srcLink:"https://kielerstopwatch.netlify.app/",
  },
];

const ProjectsSection = () => {
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
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            srcLink={project.srcLink}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
