import { Images } from "@/lib/utils/contants";
import { Box, useMantineColorScheme } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  link: string;
};

const Logo = ({ link }: Props) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box h={50} w={100} pos="relative">
      <Link href={link}>
        <Image src={colorScheme === "dark" ? Images.logoWhiteNoBackground : Images.logoBlackNoBackground} alt="MyPosts logo" fill />
      </Link>
    </Box>
  );
};

export default Logo;
