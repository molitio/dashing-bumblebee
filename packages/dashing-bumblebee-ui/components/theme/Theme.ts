import { createTheme } from "@mui/material";
import { ApplicationTheme } from "./ApplicationTheme";

const createAppTheme = () => {


  const appTheme = createTheme(ApplicationTheme);
  
  return appTheme;
};

export default createAppTheme;
