import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";

const itemData = [
  {
    img: "contact.jpeg",
    title: "Contact Form",
  },
  {
    img: "homepage.png",
    title: "Home Page for an Online learnging platform",
  },
  {
    img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    title: "Snacks",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
    title: "Tower",
  },
  {
    img: "stats.png",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "homepageSpeedDial.jpeg",
    title: "home page with speed dial",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },

  {
    img: "landerz.jpeg",
    title: "landerz landing page",
  },
  {
    img: "createCourse.png",
    title: "Create Course in an Online Learning Platform",
  },
  {
    img: "portfolio.png",
    title: "My Portofolio Landing Page",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",
    title: "Camping Car",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "home.jpeg",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",
    title: "Mountain",
  },
];

export default function TextMobileStepper({ modal, step }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(step);
  const maxSteps = itemData.length;
  const [open, setOpen] = modal;
  const [isLoaded, setisLoaded] = React.useState(false);

  const handleNext = () => {
    setisLoaded(false);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setisLoaded(false);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const imageLoaded = () => {
  //   const image = document.querySelector("#modalImage");
  //   console.log("image " + image);
  //   var isLoaded = image != null && image.complete && image.naturalHeight !== 0;
  //   setisLoaded(isLoaded);
  // };

  // React.useEffect(() => {
  //   imageLoaded();
  // }, [activeStep]);

  return (
    <Box
      sx={{
        maxWidth: 400,
        flexGrow: 1,
        p: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Tooltip
        title="Close"
        style={{
          alignSelf: "flex-end",
          backgroundColor: "white",
          marginBottom: "1rem",
        }}
      >
        <IconButton
          onClick={() => {
            setOpen(false);
            setisLoaded(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </Tooltip>
      <Box
        sx={{
          height: "80vh",
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!isLoaded && <CircularProgress color="success" />}
        <img
          onLoad={() => {
            setisLoaded(true);
          }}
          id="modalImage"
          key={itemData[activeStep].img}
          style={{
            maxWidth: "100vw",
          }}
          height="100%"
          loading="lazy"
          src={itemData[activeStep].img}
          alt={itemData[activeStep].title}
        />
      </Box>
      <MobileStepper
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          marginTop: "1rem",
          maxWidth: "1000px",
          backgroundColor: "#121212",
          color: "white",
        }}
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            style={{
              color: "#39b54a",
            }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            style={{
              color: "#39b54a",
            }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
