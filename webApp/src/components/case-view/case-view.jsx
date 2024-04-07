import { useState } from "react";
import "./case-view.css";
import { Button, TextField } from "@mui/material";
import DataTable from "./DataTable";


function CaseView() {
  const [dataRows, setDataRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bpId, setBpId] = useState("");

  const search = async () => {
    setLoading(true);
    setDataRows([]);
    const rows = [];
    setDataRows(rows);
    setLoading(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3 className="info-header">Transaction Information</h3>

      <div className="view-flex">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div>
            <TextField
              label="BP ID"
              variant="outlined"
              color="primary"
              style={{ marginRight: "40px" }}
              value={bpId}
              onChange={(e) => setBpId(e.target.value)}
              required
            />
          </div>
          <Button variant="contained" color="primary" onClick={() => search()}>
            Search
          </Button>
        </div>
        <div>
          <div>
            <DataTable rows={dataRows} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseView;
