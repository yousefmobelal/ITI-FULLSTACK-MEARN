import BackgroundImage from "../assets/background.png";
import FormField from "../Components/FormField";
import LambsSwitch from "../Components/LambsSwitch";
import NavBar from "../Components/NavBar";
import FurnitureAutocomplete from "../Components/FurnitureAutocomplete";
import CustomSlider from "../Components/CustomSlider";
import CustomCard from "../Components/CustomCard";
import { Box } from "@mui/material";
import CustomTabs from "../Components/CustomTabs";

function Home() {
  return (
    <div
      className="min-h-screen bg-bottom bg-no-repeat bg-cover py-10 px-20"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="bg-white/20 p-2">
        <NavBar />
        <FormField />
        <FurnitureAutocomplete />
        <Box
          display="flex"
          justifyContent="space-around"
          flexWrap="wrap"
          gap={4}
          mt={4}
        >
          <CustomSlider />
          <CustomCard />
          <LambsSwitch />
          <CustomTabs />
        </Box>
      </div>
    </div>
  );
}

export default Home;
