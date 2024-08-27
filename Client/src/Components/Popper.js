import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const style = {
 position: "absolute",
 top: "50%",
 left: "50%",
 transform: "translate(-50%, -50%)",
 width: 400,
 bgcolor: "#f0f0f0",
 border: "2px solid #007bff",
 borderRadius: "8px",
 boxShadow: 24,
 p: 4,
};

export default function Popper({open , setOpen}) {
 const navigate = useNavigate();
 const handleClose = () => setOpen(false);

 return (
  <div>
   <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={open}
    onClose={handleClose}
    closeAfterTransition
    slots={{ backdrop: Backdrop }}
    slotProps={{
     backdrop: {
      timeout: 500,
     },
    }}
   >
    <Fade in={open}>
     <Box sx={style}>
      <Typography id="transition-modal-title" variant="h5" component="h2">
       Welcome to Quizmo
      </Typography>
      <Typography id="transition-modal-description" sx={{ mt: 2, mb: 2 }}>
         Please login or sign up to continue
      </Typography>
      <Stack direction="row" spacing={2}>
       <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => {
         navigate("/Login");
        }}
       >
        Login
       </Button>
       <Button
        variant="outlined"
        color="secondary"
        fullWidth
        onClick={() => {
         navigate("/Signup");
        }}
       >
        Sign Up
       </Button>
      </Stack>
     </Box>
    </Fade>
   </Modal>
  </div>
 );
}
