/* import { Container,  } from "@mui/system"; */
/* import {  Grid } from "@mui/material";
import { AppBar } from "@mui/material"; */
import type { Metadata } from "next";
import { ThemeRegistry } from "../components";

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
      <body>
        <ThemeRegistry>
          {/*  <Container
            sx={{
              margin: 0,
              padding: 0,
            }}
          >
            <Grid container>
              <Grid item>
                <AppBar />
              </Grid>
            </Grid> 
          </Container>*/}
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
