import Grid from "@mui/material/Grid";
import Image from "next/image";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Grid item container>
<Grid item>
    <Box>
        <Typography  variant="h1" >
            {`Mozdítsa meg a világot velünk!`}
        </Typography>
    </Box>
        <Image src={'/background_combined.png'} alt={`cover_page_background`} objectFit='cover' objectPosition='bottom' fill/>
    </Grid>
</Grid>
  );
}
