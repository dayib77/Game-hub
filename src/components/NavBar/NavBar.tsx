import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/Logo/logo.webp";

import DarkModeToggle from "../Color/DarkModeToggle";
import SearchInput from "../Search/SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      {/* Horizontal stack */}
      <HStack>
        {/*gap="4" */}
        <Image src={logo} boxSize="60px" />

        <Text
          fontSize="1xl"
          fontWeight="bold"
          hideBelow="sm"
          whiteSpace="nowrap"
        >
          Game Hub
        </Text>
      </HStack>

      <Box flexGrow={1} marginLeft="20px" marginRight="20px">
        <SearchInput />
      </Box>

      <DarkModeToggle />
    </HStack>
  );
};

export default NavBar;
