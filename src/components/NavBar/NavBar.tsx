import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/Logo/logo.webp";

import DarkModeToggle from "../Color/DarkModeToggle";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      {/* Horizontal stack */}
      <HStack>
        {/*gap="4" */}
        <Image src={logo} boxSize="60px" />
        <Text fontSize="1xl" fontWeight="bold">
          Game Hub
        </Text>
      </HStack>

      <DarkModeToggle />
    </HStack>
  );
};

export default NavBar;
