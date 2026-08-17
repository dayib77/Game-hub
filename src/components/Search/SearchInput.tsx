import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../Game/store";
import { useNavigate } from "react-router";

const SearchInput = () => {
  // Another to solve - useRef
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const setSearchText = useGameQueryStore(s => s.setSearchText);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          placeholder="Search games..."
          variant="outline"
          borderRadius={20}
          ref={ref}
          // onChange={e => setSearchText(e.target.value)}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
