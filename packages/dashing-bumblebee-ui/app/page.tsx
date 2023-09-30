import Box from "@mui/material/Box";
import Image from "next/image";

export default function Home() {
  return (
    <Box>
        <Image src={'/background_combined.png'} alt={`cover_page_background`} objectFit='cover' objectPosition='bottom' fill/>

    </Box>
  );
}
