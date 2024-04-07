import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import { GridActionsCellItem } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";

export default function DataTable({ rows, loading }) {
  const navigate = useNavigate();

  const columns = [
    {
      field: "product",
      headerName: "Product",
      width: 200,
      editable: false,
    },
    {
      field: "caseNumber",
      headerName: "Case Number",
      width: 200,
      editable: false,
    },
    {
      field: "creationDate",
      headerName: "Creation Date",
      width: 200,
      editable: false,
    },
    {
      field: "customerName",
      headerName: "Customer Name",
      width: 200,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      editable: false,
    },
    {
      field: 'actions',
      type: 'actions',
      width: 80,
      getActions: (obj) => [
        <GridActionsCellItem
          icon={<EditIcon onClick={() => handleEdit(obj)} />}
          label="Delete"
        />,
      ],
    }
  ];

  const handleEdit = (obj) => {
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        style={{ color: "black", backgroundColor: "#fff" }}
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        loading={loading}
      />
    </div>
  );
}

DataTable.propTypes = {
  rows: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
