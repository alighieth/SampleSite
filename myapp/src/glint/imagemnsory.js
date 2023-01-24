import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const ImageMasonry = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    console.log(windowWidth);
    setWidth(windowWidth);
  }, []);

  return (
    <Box sx={{ width: "100%", minHeight: 829 }}>
      <Masonry columns={width <= 760 ? 2 : 3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <Label>{index + 1}</Label>
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
};

const itemData = [
  {
    img: "contact.jpeg",
    title: "Fern",
  },
  {
    img: "homepage.png",
    title: "Tree",
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
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },

  {
    img: "landerz.jpeg",
    title: "landerz landing page",
  },
  {
    img: "createCourse.png",
    title: "Bike",
  },
  {
    img: "portfolio.png",
    title: "portofolio",
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

export default ImageMasonry;
