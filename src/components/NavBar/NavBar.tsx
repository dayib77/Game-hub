import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/Logo/logo.webp";

import DarkModeToggle from "../Color/DarkModeToggle";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      {/* <Heading >GameHub</Heading> */}
      <DarkModeToggle />
    </HStack>
  );
};

export default NavBar;
