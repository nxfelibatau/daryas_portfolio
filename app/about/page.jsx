import React from "react";
import TracingBeam from "../components/TracingBeam";
import BackgroundBeamsWithCollision from "../components/BackgroundBeamsWithCollision";
import CanvasRevealEffect from "../components/CanvasRevealEffect";

export default function about() {
  return (
    <>
      <BackgroundBeamsWithCollision />
      <TracingBeam />
    </>
  );
}
