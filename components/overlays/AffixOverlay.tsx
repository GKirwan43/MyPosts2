"use client";

import { MainAppBarContext } from "@/context/Contexts";
import { Affix, Box, Transition } from "@mantine/core";
import { useContext } from "react";

const AffixOverlay = ({ children, visible }: { children: React.ReactNode; visible: boolean }) => {
  const { mobileNavbarOpened } = useContext(MainAppBarContext);

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={visible && !mobileNavbarOpened}>
        {(styles) => <Box style={styles}>{children}</Box>}
      </Transition>
    </Affix>
  );
};

export default AffixOverlay;
