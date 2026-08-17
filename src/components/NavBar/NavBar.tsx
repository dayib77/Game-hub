import logo from "@/assets/Logo/logo.webp";
import { Box, HStack, Image } from "@chakra-ui/react";

import DarkModeToggle from "../Color/DarkModeToggle";
import SearchInput from "../Search/SearchInput";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <HStack padding="10px">
      {/* Horizontal stack */}
      <HStack>
        {/*gap="4" */}
        <Link to="/">
          <Image src={logo} boxSize="60px" objectFit="cover" />
        </Link>

        {/* <Text
          fontSize="1xl"
          fontWeight="bold"
          hideBelow="sm"
          whiteSpace="nowrap"
        >
          Game Hub
        </Text> */}
      </HStack>

      <Box flexGrow={1} marginLeft="20px" marginRight="20px">
        <SearchInput />
      </Box>

      <DarkModeToggle />
    </HStack>
  );
};

export default NavBar;
