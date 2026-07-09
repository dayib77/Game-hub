import { Image, type ImageProps } from "@chakra-ui/react";
import bulls from "@/assets/bulls-eye.webp";
import meh from "@/assets/meh.webp";
import thumbsUp from "@/assets/thumbs-up.webp";

interface Props {
  rating_top: number;
}

const Emoji = ({ rating_top }: Props) => {
  if (rating_top < 3) return null;
  const emoji: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "thumbs up", boxSize: "25px" },
    5: { src: bulls, alt: "bulls eye", boxSize: "35px" },
  };

  return <Image {...emoji[rating_top]} />;
};

export default Emoji;
