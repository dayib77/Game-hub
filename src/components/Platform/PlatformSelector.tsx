import usePlatform from "@/hooks/usePlatform";
import { Button, Menu } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatform();

  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>
          Platforms
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content width="150px">
          {platforms?.map(platform => (
            <Menu.Item key={platform.id} value={platform.slug}>
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
