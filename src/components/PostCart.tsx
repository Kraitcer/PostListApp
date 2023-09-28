import { Flex, HStack, VStack, Text, Badge } from "@chakra-ui/react";
import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface PostProp {
  posts: Posts;
}

const PostCart = ({ posts }: PostProp) => {
  return (
    <>
      <Flex>
        <VStack
          bg={"blue.400"}
          w={600}
          h={100}
          borderRadius={10}
          p={0}
          overflow={"hidden"}
          gap={0}
        >
          <Flex
            alignItems={"center"}
            w={"100%"}
            h={"50%"}
            color={"white"}
            bg={"blue.600"}
            m={0}
            pl={4}
            pr={20}
          >
            <Badge
              borderRadius={50}
              position={"absolute"}
              mt={12}
              bg={"pink"}
              fontSize={20}
              w={9}
              h={9}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {posts.id}
            </Badge>
            <Flex
              alignItems={"center"}
              w={"100%"}
              justifyContent={"center"}
              pt={2}
            >
              <Text
                ml={16}
                fontSize={30}
                textOverflow={"ellipsis"}
                whiteSpace={"nowrap"}
                overflow={"hidden"}
              >
                {posts.title}
              </Text>
            </Flex>
          </Flex>
          ;
          <Flex w={"100%"} h={"100%"} pr={6} pl={14} pt={3}>
            <Text
              textOverflow={"ellipsis"}
              whiteSpace={"nowrap"}
              overflow={"hidden"}
              color={"white"}
            >
              {posts.body}
            </Text>
          </Flex>
          ;
        </VStack>
        <Badge
          borderRadius={50}
          position={"absolute"}
          mt={6}
          ml={575}
          _hover={{
            w: 14,
            h: 14,
            mt: 5,
            ml: 572,
          }}
          //   mb={23}
          bg={"orange"}
          color={"white"}
          w={12}
          h={12}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Link to={`/${posts.id}`} state={posts}>
            <FaBookOpenReader size={26} />
          </Link>
        </Badge>
      </Flex>
    </>
  );
};

export default PostCart;
