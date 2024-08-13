import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

import React from "react";

const Quiz_Dialog = () => {
  const theme = useTheme();

  return <Dialog 
  open={true}
  title="Quiz"
  />;
};

export default Quiz_Dialog;
