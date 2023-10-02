import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import type { Metadata } from "next";
import { ThemeRegistry } from "../src/components";
import { ApplicationContextRoot } from "../context";

export const metadata: Metadata = {
  title:
    ApplicationContextRoot.contentRoot["common"].leafs["app"].textContent
      .appTitle,
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
          <Box sx={{ position: "relative" }}>
            {/*<AppBar*/}
            {/*  position="sticky"*/}
            {/*  elevation={8}*/}
            {/*  sx={{*/}
            {/*    backgroundColor: ApplicationTheme?.palette?.tertiary?.main,*/}
            {/*  }}*/}
            {/*>*/}
            <Box
              sx={{ margin: "1em 0 0 2em", position: "absolute", zIndex: 5 }}
            >
              <Image
                src={"/logo_v1.svg"}
                alt={"logo"}
                width={150}
                height={75}
              />
            </Box>
            {/*   </AppBar>*/}
            <Box>{children}</Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
