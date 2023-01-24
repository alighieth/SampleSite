import "./App.css";
import Contact from "./glint/contact";
import About, { Extras } from "./glint/features";
import General from "./glint/general";
import Header from "./glint/header";
import Skills from "./glint/skills";
import SpeedDial from "@mui/material/SpeedDial";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
// iphone 11 414 * 896

const actions = [{ icon: <FileCopyIcon />, name: "Copy" }];

function App() {
  return (
    <>
      <div id="main-div">
        <Header />
        <General />
        <About />
        <Extras />
        <Skills />
        <Contact />
        <SpeedDial
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          style={{ position: "fixed" }}
          ariaLabel="SpeedDial basic example"
          sx={{
            position: "absolute",
            bottom: 16,
            right: 16,
            "& .MuiFab-primary": { backgroundColor: "#39b54a", color: "white" },
            "& .MuiFab-secondary": {
              backgroundColor: "#121212",
              color: "white",
            },
          }}
          icon={<ArrowUpwardIcon />}
        ></SpeedDial>
      </div>
    </>
  );
}

export default App;
