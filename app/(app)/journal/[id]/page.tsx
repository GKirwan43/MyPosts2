import MainCard from "@/components/cards/MainCard";
import TitleDivider from "@/components/dividers/TitleDivider";
import { getJournal } from "@/lib/services/server/journal";
import { Text, Title } from "@mantine/core";

const Journal = async ({ params }: { params: { id: string } }) => {
  const journal = await getJournal(params.id);

  return (
    <>
      <TitleDivider title="Journal" />
      <MainCard>
        <Title>{journal.title}</Title>
        <Text>{journal.description}</Text>
      </MainCard>
    </>
  );
};

export default Journal;
