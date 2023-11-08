import { Images } from "@/lib/utils/contants";
import { Box } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

type Props = {
  link: string;
  darkMode: Boolean;
};

const Logo = ({ link, darkMode }: Props) => {
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
