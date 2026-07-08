import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>
          Order by: Relevance
          <span style={{ marginLeft: "8px" }}></span>
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content width="200px">
          <Menu.Item value="relevance">Relevance</Menu.Item>
          <Menu.Item value="name">Name</Menu.Item>
          <Menu.Item value="release-date">Release Date</Menu.Item>
          <Menu.Item value="popularity">Popularity</Menu.Item>
          <Menu.Item value="average-rating">Average Rating</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
