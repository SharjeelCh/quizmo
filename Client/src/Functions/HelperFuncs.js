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

export const returnQuizTypeNumber = (quizType, QuizNumObject) => {
 const value = QuizNumObject.find((item) => item.name === quizType);
 return value ? value.uid : 9;
};

export function stringToColor(string) {
 let hash = 0;
 let i;

 for (i = 0; i < string.length; i += 1) {
  hash = string.charCodeAt(i) + ((hash << 5) - hash);
 }

 let color = "#";

 for (i = 0; i < 3; i += 1) {
  const value = (hash >> (i * 8)) & 0xff;
  color += `00${value.toString(16)}`.slice(-2);
 }

 return color;
}

export function stringAvatar(name) {
 const nameParts = name.split(" ");

 const firstInitial = nameParts[0] ? nameParts[0][0] : "?";
 const secondInitial = nameParts[1] ? nameParts[1][0] : "";

 return {
  sx: {
   bgcolor: stringToColor(name),
  },
  children: `${firstInitial}${secondInitial}`,
 };
}
