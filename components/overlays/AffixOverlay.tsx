"use client";

import { Affix, Box, Transition } from "@mantine/core";

const AffixOverlay = ({
  children,
  visible,
}: {
  children: React.ReactNode;
  visible: boolean;
}) => {
  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={visible}>
        {(styles) => <Box style={styles}>{children}</Box>}
      </Transition>
    </Affix>
  );
};

export default AffixOverlay;
