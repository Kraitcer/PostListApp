import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";

import {
  Flex,
  HStack,
  VStack,
  Text,
  Badge,
  Box,
  Button,
} from "@chakra-ui/react";

const EachPost = () => {
  let { state: posts } = useLocation();
  // const currentPost = ;
  const navigate = useNavigate();
  return (
    <>
      <VStack
        bg={"blue.100"}
        h={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <VStack
          bg={"blue.400"}
          w={600}
          //   h={100}
          borderRadius={10}
          p={0}
          overflow={"hidden"}
          gap={0}
        >
          <Flex
            alignItems={"center"}
            w={"100%"}
            // h={"50%"}
            color={"white"}
            bg={"blue.600"}
            m={0}
            pl={4}
            pr={20}
          >
            <Flex
              alignItems={"center"}
              w={"100%"}
              justifyContent={"center"}
              pt={2}
            >
              <Text
                ml={16}
                fontSize={30}
                // textOverflow={"ellipsis"}
                // whiteSpace={"nowrap"}
                overflow={"hidden"}
              >
                {posts.title}
              </Text>
            </Flex>
          </Flex>

          <Flex w={"100%"} pr={6} pl={14} pt={3} pb={12}>
            <Text
              //   textOverflow={"ellipsis"}
              //   whiteSpace={"nowrap"}
              //   overflow={"hidden"}
              color={"white"}
            >
              {posts.body}
            </Text>
          </Flex>
        </VStack>
        <Button
          onClick={() => navigate("/")}
          bg={"orange"}
          color={"white"}
          borderRadius={50}
          h={"90px"}
          //   position={"absolute"}
          mt={2}
        >
          <TiArrowBackOutline size={60} />
        </Button>
      </VStack>
    </>
  );
};

export default EachPost;
