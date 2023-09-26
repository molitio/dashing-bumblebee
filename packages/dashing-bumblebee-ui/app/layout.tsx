import { Container, Grid } from "@mui/system";
import {CssBaseline} from "@mui/material";
import {AppBar} from "@mui/material"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashing Bubmlebee",
  description: "Mozdítsa meg a világot velünk!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CssBaseline />
      <Container
        component="body"
        sx={{
          margin: 0,
          padding: 0,
        }}
      >
        <Grid container>
<Grid item>
  <AppBar />
</Grid>
        {children}
        </Grid>
      </Container>
    </html>
  );
}
