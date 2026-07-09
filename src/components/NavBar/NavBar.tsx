import logo from "@/assets/Logo/logo.webp";
import { Box, HStack, Image } from "@chakra-ui/react";

import DarkModeToggle from "../Color/DarkModeToggle";
import SearchInput from "../Search/SearchInput";

interface Props {
  handleSearch: (searchText: string) => void;
}

const NavBar = ({ handleSearch }: Props) => {
  return (
    <HStack padding="10px">
      {/* Horizontal stack */}
      <HStack>
        {/*gap="4" */}
        <Image src={logo} boxSize="60px" />

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
        <SearchInput onSearch={handleSearch} />
      </Box>

      <DarkModeToggle />
    </HStack>
  );
};

export default NavBar;
