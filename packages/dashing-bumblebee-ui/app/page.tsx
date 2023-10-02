import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ApplicationTheme } from "../src/components/theme/ApplicationTheme";
import { ApplicationContextRoot } from "../context";

export default function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: "0",
        inset: "0",
        height: "80vh",
        width: "100%",
        padding: "12em 0 0 0",
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
        <Typography
          variant="h1"
          sx={{
            fontSize: "2.4rem",
            fontWeight: 600,
            overflowWrap: "break-word",
          }}
        >
          {
            ApplicationContextRoot.contentRoot["home"].leafs["cover"]
              .textContent["title"]
          }
        </Typography>
        <Typography variant="subtitle1" sx={{ overflowWrap: "break-word" }}>
          {
            ApplicationContextRoot.contentRoot["home"].leafs["cover"]
              .textContent["subTitle"]
          }
        </Typography>
        <Stack
          spacing={2}
          direction="row"
          sx={{ padding: 2, justifyContent: "center" }}
        >
          <Button color="primary" variant="contained">
            {
              ApplicationContextRoot.contentRoot["home"].leafs["cover"]
                .textContent["ctaPhone"]
            }
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor:
                ApplicationTheme?.palette?.interactiveSecondary?.main,
            }}
          >
            {
              ApplicationContextRoot.contentRoot["home"].leafs["cover"]
                .textContent["ctaEmail"]
            }
          </Button>
        </Stack>
        <Typography variant="subtitle2">
          {
            ApplicationContextRoot.contentRoot["home"].leafs["cover"]
              .textContent["subTitle2"]
          }
        </Typography>
      </Container>
      <Box sx={{ height: "500px" }} />
    </Box>
  );
}
