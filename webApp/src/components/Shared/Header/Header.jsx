import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Transactions
          </Typography>

          <div className="home-btn">
            <Tooltip title="Add Users">
              <Link to="/Users">
                <IconButton>
                  <PersonAddAlt1RoundedIcon sx={{ color: "white" }} />
                </IconButton>
              </Link>
            </Tooltip>
          </div>
          <IconButton color="inherit">
            <ExitToAppIcon sx={{ color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
