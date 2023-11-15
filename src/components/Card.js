import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc,srcLink }) => {
  return (
    <VStack
      spacing={4}
      bg="white"
      boxShadow="md"
      p={4}
      borderRadius="md"
      maxW="sm"
      w="100%"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <VStack spacing={2} alignItems="start">
        <Heading color="black" as="h2" size="md">
          {title}
        </Heading>
        <Text color="black">{description}</Text>
      </VStack>
      <HStack justifyContent="flex-end">
        <Text style={{cursor:"pointer"}} color="blue.500"><a href={srcLink}>{console.log(srcLink)}Learn More</a> </Text> 
        <FontAwesomeIcon color="red" icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
