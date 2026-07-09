import noImage from "@/assets/Logo/no-image-placeholder-6f3882e0.webp";
const getCroppedImageUrl = (imageUrl: string | null): string => {
  if (!imageUrl) return noImage; // Return the default image if imageUrl is undefined or null

  const targetSubstring = "media/";
  const index = imageUrl.indexOf(targetSubstring) + targetSubstring.length; // Find the index of the target substring and add its length to get the starting index of the file name

  return imageUrl.slice(0, index) + "crop/600/400/" + imageUrl.slice(index); // Construct the new URL by slicing the original URL and inserting the crop parameters
};

export default getCroppedImageUrl;
