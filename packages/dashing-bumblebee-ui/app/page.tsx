import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ApplicationTheme } from "../src/components/theme/ApplicationTheme";

export default function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: "0",
        inset: "0",
        height: "80vh",
        width: "100%",
        padding: "10em 0 0 0",
      }}
    >
      <Box
        component={Image}
        src={"/background_combined.png"}
        alt={`cover_page_background`}
        sx={{
          top: "0",
          objectFit: "cover",
          objectPosition: "bottom",
          zIndex: "-9",
        }}
        fill
      />
      <Container
        maxWidth="sm"
        sx={{
          color: ApplicationTheme.palette.text.main,
          marginLeft: "4em",
          textAlign: "center",
          overflowWrap: "break-word",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "2.4rem", fontWeight: 600 }}>
          {`Mozdítsa meg a világot velünk!`}
        </Typography>
        <Typography variant="subtitle1">
          {
            "Személyre szabott közvetítés a szállítási igények és a megfelelő szállítmányozók között."
          }
        </Typography>
        <Stack
          spacing={2}
          direction="row"
          sx={{ padding: 2, justifyContent: "center" }}
        >
          <Button color="primary" variant="contained">
            {"Telefon"}
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor:
                ApplicationTheme?.palette?.interactiveSecondary?.main,
            }}
          >
            {"email"}
          </Button>
        </Stack>
        <Typography variant="subtitle2">
          {"Egy kattintás a megoldásra."}
        </Typography>
      </Container>
      <Box sx={{ height: "500px" }} />
    </Box>
  );
}
