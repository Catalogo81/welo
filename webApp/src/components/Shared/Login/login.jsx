import "./login.css";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material/";



function SignIn() {
  const [caseData, setCaseData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const back = () => {
    window.history.back();
  };


  return (
    <>
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <div
          style={{ textAlign: "center", marginTop: "50px", marginLeft: "20px" }}
        >
          <h3 className="info-header-1">Sign in</h3>
        </div>

        <div className="flex m-t-50">
          <div >
            <div className="w-70 m-l-50">
              <TextField
                label="Username"
                color="primary"
                margin="normal"
                variant="outlined"
                className="w-300"
                value={caseData.username}
              />
            </div>
            <div className="w-70 m-l-50">
              <TextField
                label="Password"
                color="primary"
                margin="normal"
                variant="outlined"
                className="w-300"
                value={caseData.password}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Button
            style={{ marginTop: "20px" }}
            variant="contained"
            color="primary"
            onClick={(e) => {
              handleOpen(e);
            }}
          >
            Sign in
          </Button>
        </div>
      </div>
      {open ? (
        <AlertDialogSlide
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          setOpen={setOpen}
          open={open}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default SignIn;
