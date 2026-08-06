import usePlatform from "@/hooks/usePlatform";
import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../Game/store";

// Describes component's input

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatform();
  const selectedPlatform = useGameQueryStore(s => s.game.platformID);
  const setPlatformID = useGameQueryStore(s => s.setPlatformID);

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>
          {selectedPlatform
            ? platforms?.results.find(p => p.id === selectedPlatform)?.name
            : "Select Platform"}
          <span style={{ marginLeft: "8px" }}></span>
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content width="200px">
          {platforms?.results.map(platform => (
            <Menu.Item
              key={platform.id}
              value={platform.slug}
              onClick={() => setPlatformID(platform.id)}
            >
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
