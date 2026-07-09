import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  return (
    // <form action="">
    <InputGroup startElement={<BsSearch />}>
      <Input
        placeholder="Search games..."
        variant="outline"
        borderRadius={20}
        onChange={e => onSearch(e.target.value)}
      />
    </InputGroup>
    // </form>
  );
};

export default SearchInput;
