import "./Case-edit.css";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material/";



function CaseEdit() {
  const [caseData, setCaseData] = useState({
    creadtion_date: "",
    customer_name: "",
    bp_Id: "",
    status: "",
    description: "",
    product: "",
    owner: "",
    case_number: "",
    fraud_amount: "",
    id_number: "",
    outcome_status: "",
    synopsis_outcome: "",
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
          <div style={{ display: "flex", marginLeft: "30px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => back(e)}
            >
              Back
            </Button>
          </div>
          <h3 className="info-header-1">Transaction ID: {caseData.case_number}</h3>
        </div>

        <div className="flex m-t-50">
          <div className="form__columns">
            <div className="w-70 m-l-50">
              <TextField
                label="Owner"
                color="primary"
                margin="normal"
                variant="outlined"
                className="w-300"
                value={caseData.owner}
              />
            </div>
            <div className="w-70 m-l-50">
              <TextField
                label="Creation Date"
                color="primary"
                margin="normal"
                variant="outlined"
                className="w-300"
                value={caseData.creadtion_date}
              />
            </div>
            <div className="w-70 m-l-50">
              <TextField
                label="Product"
                margin="normal"
                className="w-300"
                variant="outlined"
                color="primary"
                value={caseData.product}
              />
            </div>
            <div className="w-70 m-l-50">
              <TextField
                label="Fraud Amount"
                color="primary"
                margin="normal"
                variant="outlined"
                className="w-300"
                value={caseData.fraud_amount}
              />
            </div>
          </div>

          <div className="form__columns">
            <div className="w-70 m-l-50">
              <TextField
                label="Customer Name"
                color="primary"
                margin="normal"
                variant="outlined"
                className="w-300"
                value={caseData.customer_name}
              />
            </div>
            <div className="w-70 m-l-50">
              <TextField
                label="Bp ID"
                color="primary"
                margin="normal"
                variant="outlined"
                className="w-300"
                value={caseData.bp_Id}
              />
            </div>

            <div className="w-100 m-l-50">
              <TextField
                label="Status"
                color="primary"
                margin="normal"
                variant="outlined"
                className="w-300"
                multiline
                minRows={2.5}
                value={caseData.status}
              />
            </div>
          </div>

          <div className="form__columns">
            <div className="w-70 m-l-50">
              <TextField
                label="Description"
                color="primary"
                margin="normal"
                variant="outlined"
                className="w-300"
                multiline
                minRows={11.5}
                value={caseData.description}
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
            Review
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

export default CaseEdit;
