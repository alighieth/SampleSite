import SpeedDial from "@mui/material/SpeedDial";
import Box from "@mui/material/Box";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import InfoIcon from "@mui/icons-material/Info";
import BugReportIcon from "@mui/icons-material/BugReport";
import CallIcon from "@mui/icons-material/Call";

const actions = [
  { icon: <InfoIcon />, name: "About Me" },
  { icon: <AutoAwesomeIcon />, name: "Samples" },
  { icon: <BugReportIcon />, name: "What we offer" },
  { icon: <CallIcon />, name: "Contact Me" },
];

const Header = () => {
  return (
    <div className="header header-glint">
      <h1>
        alighieth<span>.</span>
      </h1>

      {/* sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }} */}
      {/* <Box>
        <SpeedDial
          FabProps={{
            size: "medium",
            style: { backgroundColor: "black" },
          }}
          direction="left"
          // sx={{ position: "absolute", bottom: 16, right: 16 }}
          ariaLabel="SpeedDial openIcon example"
          icon={<SpeedDialIcon openIcon={<CloseIcon />} />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box> */}
    </div>
  );
};

export default Header;
