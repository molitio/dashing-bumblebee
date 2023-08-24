"use client";
import React from "react";
import Image from "next/image";
import { StyledPage } from "./styled";

type HomePageState = {
  marco?: string,
  polo?: string,
}

const HomePage = () => {
  const [marco, setMarco] = React.useState<HomePageState>({ marco: "marco", polo: "" });

  React.useEffect(() => {
    const effect = async () => {
      /* const polo = await fetch("/api");
      console.log("polo", polo); */
    };
    effect();
  }, []);

  return (
    {/* <StyledPage> */}
     
    <div>

    <h1>{marco?.marco ?? ""}</h1>
      <h1>{marco?.polo ?? ""}</h1>
      </div>
    /* </StyledPage> */
  );
};
