import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../Game/store";

const SortSelector = () => {
  const selectedSortOrder = useGameQueryStore(s => s.game.sortOrder);
  const setSortOrder = useGameQueryStore(s => s.setSortOrder);

  const sortOptions = [
    { value: "relevance", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const customSortOptions = sortOptions.find(
    option => option.value === selectedSortOrder, // Output: { value: "-added", label: "Date Added" }
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>
          Order by: {customSortOptions?.label || "Relevance"}
          <span style={{ marginLeft: "8px" }}></span>
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content width="200px">
          {sortOptions.map(option => (
            <Menu.Item
              key={option.value}
              value={option.value}
              onClick={() => setSortOrder(option.value)}
            >
              {option.label}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
