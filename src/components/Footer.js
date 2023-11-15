import React from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FaChevronUp } from "react-icons/fa";



let date = new Date().getFullYear();
    console.log(date)


const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    
  };

  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Created by Onur Tüfekçi • © <span>{date}</span></p>
          <p>Back to top<IconButton
            icon={<FaChevronUp />}
            size="md"
            variant="ghost"
            colorScheme="whiteAlpha"
            aria-label="Back to Top"
            onClick={handleScrollToTop}
          ></IconButton></p>
          
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
