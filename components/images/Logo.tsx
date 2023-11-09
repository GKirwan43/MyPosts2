import { MainAppBarContext } from "@/context/Contexts";
import { Images } from "@/lib/utils/contants";
import { Box } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

type Props = {
  link: string;
};

const Logo = ({ link }: Props) => {
  const { user } = useContext(MainAppBarContext);
  const darkMode = user?.settings.darkMode;

  return (
    <Box h={50} w={100} pos="relative">
      <Link href={link}>
        <Image
          src={
            darkMode
              ? Images.logoWhiteNoBackground
              : Images.logoBlackNoBackground
          }
          alt="MyPosts logo"
          fill
        />
      </Link>
    </Box>
  );
};

export default Logo;
