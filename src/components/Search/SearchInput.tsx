import { Input, InputGroup } from "@chakra-ui/react";
// import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../Game/store";

const SearchInput = () => {
  // Another to solve - useRef
  //   const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(s => s.setSearchText);
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
        onChange={e => setSearchText(e.target.value)}
      />
    </InputGroup>
    // </form>
  );
};

export default SearchInput;
