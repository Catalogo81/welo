import { useState } from "react";
import "./UnauthorisedPage.css";
import { Button, TextField, Dialog, Grid } from "@mui/material/";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function UnAuthorisedPage({ accounts }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    personal_number: "",
    email_address: "",
    display_name: "",
    modified_by: accounts[0].username.toLocaleLowerCase(),
    created_by: accounts[0].username.toLocaleLowerCase(),
    CompanyName: "",
    JobTitle: "",
    Country: "",
    City: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <div className="NoEntry">
        <button className="closeBtn">
          Click here to request access{" "}
        </button>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{ borderRadius: "10px" }}
      >
        <DialogTitle sx={{ m: 0, p: 0 }} style={{ backgroundColor: "#1976d2" }}>
          <IconButton
            aria-label="close"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon onClick={handleClose} />
          </IconButton>
          <p style={{ color: "whitesmoke", textAlign: "center" }}>
            Request Access
          </p>
        </DialogTitle>
        <DialogContent dividers style={{ padding: "40px" }}>
          <Grid container spacing={1}>
            <TextField
              style={{ marginBottom: "3%" }}
              variant="outlined"
              required={true}
              fullWidth
              disabled
              id="Email"
              label="Email"
              name="Email"
              autoComplete="Email"
              type="email"
              value={data["email_address"]}
            />
            <TextField
              style={{ marginBottom: "3%" }}
              variant="outlined"
              required
              fullWidth
              disabled
              id="Personal Number"
              label="Personal Number"
              name="Personal Number"
              value={data["personal_number"]}
            />
            <TextField
              style={{ marginBottom: "3%" }}
              variant="outlined"
              required
              fullWidth
              disabled
              id="Job Title"
              label="Job Title"
              name="Job Title"
              value={data["JobTitle"]}
            />
            <TextField
              style={{ marginBottom: "3%" }}
              variant="outlined"
              required
              fullWidth
              disabled
              id="CompanyName"
              label="CompanyName"
              name="CompanyName"
              value={data["CompanyName"]}
            />
            <TextField
              style={{ marginBottom: "3%" }}
              variant="outlined"
              required
              disabled
              fullWidth
              id="Country"
              label="Country"
              name="Country"
              value={data["Country"]}
            />
            <TextField
              style={{ marginBottom: "3%" }}
              variant="outlined"
              required
              disabled
              fullWidth
              id="City"
              label="City"
              name="City"
              value={data["City"]}
            />
          </Grid>
        </DialogContent>
        <DialogActions style={{ backgroundColor: "#1976d2" }}>
          <Button
            fullWidth
            variant="contained"
            color="inherit"
            size="medium"
          >
            Submit
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}

export default UnAuthorisedPage;
