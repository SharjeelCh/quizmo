export const truncateText = (text, maxLength) => {
  const str = String(text || "").replace(/,/g, ""); // Remove all commas
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength) + "...";
};
