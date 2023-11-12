import MainCard from "@/components/cards/MainCard";
import JournalPostsDisplay from "@/components/data_displays/JournalPostsDisplay";
import TitleDivider from "@/components/dividers/TitleDivider";
import CreatePost from "@/components/inputs/CreatePost";
import { getJournal, getJournalPosts } from "@/lib/services/server/journal";
import { Center, Stack, Text, Title } from "@mantine/core";

const Journal = async ({ params }: { params: { id: string } }) => {
  const journal = await getJournal(params.id);
  const journalPosts = await getJournalPosts(params.id);

  return (
    <>
      <Stack>
        <TitleDivider title="Journal" />
        <MainCard>
          <Title>{journal.title}</Title>
          <Text>{journal.description}</Text>
        </MainCard>
        <TitleDivider title="Posts" />
        <CreatePost journalId={journal.id} />
        {journalPosts.length !== 0 ? (
          <JournalPostsDisplay posts={journalPosts} />
        ) : (
          <Stack justify="center" align="center" h={250}>
            <Title size="h3" order={2}>
              No journal posts have been created for this journal.
            </Title>
            <Text>
              No posts have been created for this journal. Press "Create Post"
              to create your first post.
            </Text>
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default Journal;
