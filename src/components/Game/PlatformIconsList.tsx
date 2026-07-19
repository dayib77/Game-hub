import type { Platform } from "@/hooks/usePlatform";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGamepad,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: FaGamepad,
    ios: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe,
  };

  const icons = platforms.map(p => iconMap[p.slug]).filter(Boolean);

  return (
    <HStack gap={2}>
      {icons.map((IconComponent, index) => (
        <Icon key={index} as={IconComponent} boxSize={5} marginRight={2} />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
