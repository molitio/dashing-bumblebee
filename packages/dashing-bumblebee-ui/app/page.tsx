import Grid from "@mui/material/Grid";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Grid item container>
      <Grid item>
        <Typography
          variant="h1"
          sx={{
            border: "3px dashed purple",
          }}
        >
          {`Mozdítsa meg a világot velünk!`}
        </Typography>
      </Grid>
      <Grid item sx={{}}>
        <Box
          component={Image}
          src={"/background_combined.png"}
          alt={`cover_page_background`}
          sx={{
            objectFit: "cover",
            objectPosition: "bottom",
            // zIndex: "-9",
          }}
          fill
        />
      </Grid>
    </Grid>
  );
}
