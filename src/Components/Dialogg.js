import { useTheme } from "@emotion/react";
import { CircularProgress } from "@mui/material";
import React from "react";

const Quiz_Dialog = () => {
 const theme = useTheme();

 return (
  <div className="flex h-lvh justify-center items-center">
   <CircularProgress color="warning" />
  </div>
 );
};

export default Quiz_Dialog;
