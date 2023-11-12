"use client";

import { Stack, Text, Title } from "@mantine/core";
import MainCard from "../cards/MainCard";

const JournalPostsDisplay = ({ posts }: { posts: JournalPost[] }) => {
  return (
    <Stack>
      {posts.map((post: any) => (
        <MainCard key={post.id}>
          <Title>{post.title}</Title>
          <Text>{post.createdAt}</Text>
          <div dangerouslySetInnerHTML={{ __html: post.post }} />
        </MainCard>
      ))}
    </Stack>
  );
};

export default JournalPostsDisplay;
