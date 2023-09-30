import React from "react";
import AppBar from "@mui/material/AppBar";
import Dashboard from "@mui/icons-material/Dashboard";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import type { Metadata } from "next";
import { ThemeRegistry } from "../src/components";
import { ApplicationTheme } from "../src/components/theme/ApplicationTheme";

export const metadata: Metadata = {
  title: "Dashing Bumblebee",
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
          <AppBar
            position="sticky"
            elevation={8}
            sx={{
              backgroundColor: ApplicationTheme?.palette?.tertiary?.main,
              opacity: "0.4",
            }}
          >
            <Toolbar>
              <Dashboard />
            </Toolbar>
          </AppBar>
          <Box>{children}</Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
