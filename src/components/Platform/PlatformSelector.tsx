import type { Platform } from "@/hooks/useGames";
import usePlatform from "@/hooks/usePlatform";
import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform?: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data: platforms, error } = usePlatform();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>
          {selectedPlatform
            ? platforms?.results.find(p => p.slug === selectedPlatform.slug)
                ?.name
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
              onClick={() => onSelectPlatform(platform)}
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
