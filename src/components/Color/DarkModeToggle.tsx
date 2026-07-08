import { HStack, Text } from "@chakra-ui/react";
// 1. Import hooks and components from your generated UI folder
import { useColorMode } from "@/components/ui/color-mode";
import { Switch } from "@/components/ui/switch";

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack gap="3">
      {/* 2. Use the updated 'checked' and 'onCheckedChange' props */}
      <Switch
        colorPalette="purple"
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
        label="Dark Mode"
      />
      <Text fontSize="sm" whiteSpace="nowrap">
        Dark Mode
      </Text>
    </HStack>
  );
};

export default DarkModeToggle;
