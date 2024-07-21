export const truncateText = (text, maxLength) => {
  const str = String(text || "").replace(/,/g, "");
  if (str.length <= maxLength) {
    return str;
  }
  return str.substring(0, maxLength) + "...";
};

export const handlegoToSignup = () => {
  window.location.href = "/Signup";
};
export const handlegoToLogin = () => {
  window.location.href = "/Login";
};
export const handlegoToHome = () => {
  window.location.href = "/";
};
