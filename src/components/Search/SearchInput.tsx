import { Input, InputGroup } from "@chakra-ui/react";
// import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  // Another to solve - useRef
  //   const ref = useRef<HTMLInputElement>(null);
  return (
    // <form
    //   onSubmit={e => {
    //     e.preventDefault();
    //     if (ref.current) {
    //       onSearch(ref.current.value);
    //     }
    //   }}
    // >
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
