"use client";

import React, { useState } from "react";
import AffixOverlay from "../overlays/AffixOverlay";
import { Button } from "@mantine/core";
import { IconTextPlus } from "@tabler/icons-react";
import MainCard from "../cards/MainCard";
import { Transition } from "@mantine/core";
import CreateJournalPostForm from "../forms/CreateJournalPostForm";

const CreatePost = ({ journalId }: { journalId: string }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Transition transition="pop" mounted={active}>
        {(styles) => (
          <MainCard style={styles}>
            <CreateJournalPostForm
              journalId={journalId}
              onCancel={() => setActive(false)}
            />
          </MainCard>
        )}
      </Transition>

      <AffixOverlay visible={!active}>
        <Button
          size="lg"
          radius="xl"
          leftSection={<IconTextPlus />}
          onClick={() => setActive(true)}
        >
          Create post
        </Button>
      </AffixOverlay>
    </>
  );
};

export default CreatePost;
