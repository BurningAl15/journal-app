import { Navbar, SideBar } from "../components";
import { Box } from "@mui/material";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", mt: 8 }}>
      {/* Navbar drawerWidth*/}
      <Navbar drawerWidth={drawerWidth} />

      {/* Sidebar drawerWidth*/}
      <SideBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}

        {children}
      </Box>
    </Box>
  );
};
