import { useState } from "react";
import usePosts from "./hooks/usePost";
import React from "react";
import PostCart from "./PostCart";
import { Spinner, VStack } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";

const PostList = () => {
  const pageSize = 10;

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = usePosts({ pageSize });

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;
  const fetchedPostsCount =
    data.pages.reduce((total, page) => total + page.length, 0) || 0;
  return (
    <>
      <InfiniteScroll
        dataLength={fetchedPostsCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <VStack bg={"blue.100"} p={4}>
          {data.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.map((post) => (
                <PostCart key={post.id} posts={post} />
              ))}
            </React.Fragment>
          ))}
          {/* <button
            className="btn btn-primary my-3 ms-1"
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? "Loading" : "Load More..."}
          </button> */}
        </VStack>
      </InfiniteScroll>
    </>
  );
};
export default PostList;
