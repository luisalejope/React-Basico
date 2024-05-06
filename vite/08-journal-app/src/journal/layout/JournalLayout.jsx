import { Box, Toolbar } from "@mui/material";
import PropTypes from "prop-types";
import { NavBar, SideBar } from "../components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {

  const { messageSaved } = useSelector(state => state.journal);
  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota Actualizada', messageSaved, 'success')
    }
  }, [messageSaved])

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />
      <SideBar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

JournalLayout.propTypes = {
  children: PropTypes.any,
};
