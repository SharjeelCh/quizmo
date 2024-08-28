import { Button } from "@mui/material";
import React from "react";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import Typography from "@mui/material/Typography";

const Quiz_Dialog = ({ hide }) => {
 const [start, setStart] = React.useState(false);
 const [progress, setProgress] = React.useState(0);

 const handleClick = () => {
  setStart(true);
 };

 React.useEffect(() => {
  let timer;
  if (start && progress < 100) {
   timer = setInterval(() => {
    setProgress((prevProgress) =>
     prevProgress >= 100 ? 100 : prevProgress + 10
    );
   }, 800);
  }
  return () => {
   clearInterval(timer);
  };
 }, [start, progress]);

 if (progress >= 100) {
  hide(true);
 }

 return (
  <div className="flex h-lvh justify-center items-center">
   {!start ? (
    <Button variant="contained" color="warning" onClick={handleClick}>
     Click to start the quiz
    </Button>
   ) : (
    <div className="flex items-center justify-center flex-col gap-4">
     <CircularProgressWithLabel value={progress} color="warning" />
     <Typography variant="body2" component="div" color="wheat">
      Creating your quiz ...
     </Typography>
    </div>
   )}
  </div>
 );
};

export default Quiz_Dialog;
