import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Dosa: Our dosas are a crispy, golden delight made from a fermented rice and lentil batter. Enjoy them plain or stuffed with your choice of fillings, like spiced potatoes or vegetables, for a satisfying meal.<br />
        </p>
        <p style={{ paddingTop: "10px" }}>
          Chola: Savor the rich, flavorful chola, a hearty and spicy dish made with chickpeas simmered in a fragrant blend of spices. It’s a perfect complement to our dosas and idlis.<br />
        </p>
        <p style={{ paddingTop: "10px" }}>
          Idli: These soft, fluffy rice cakes are a staple of South Indian breakfasts. Steamed to perfection, our idlis are light and airy, and pair wonderfully with sambar and chutneys.<br />
        </p>
        <p style={{ paddingTop: "10px" }}>
          Sambhar: Our sambhar is a classic lentil stew brimming with vegetables and infused with a blend of aromatic spices. It’s the perfect accompaniment to dosas, idlis, and rice.<br />
        </p>
        <p style={{ paddingTop: "10px" }}>
          Masala Dosa: This special dosa is generously filled with a savory spiced potato mixture, making it a flavorful and satisfying choice. Crispy on the outside and soft on the inside, it’s a true South Indian favorite.<br />
        </p>
        <p style={{ paddingTop: "10px" }}>
          Paneer: Enjoy our paneer dishes, featuring soft, homemade cheese cooked in rich, flavorful gravies or dry masalas. Each bite is a blend of creamy texture and bold spices.<br />
        </p>

      </Box>
    </Layout>
  );
};

export default About;
