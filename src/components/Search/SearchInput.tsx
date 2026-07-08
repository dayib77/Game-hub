import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch />}>
      <Input
        placeholder="Search games..."
        variant="outline"
        borderRadius={20}
      />
    </InputGroup>
  );
};

export default SearchInput;
