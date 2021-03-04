import React from "react";
import { LayoutMain } from "../../pages/LayoutMain/LayoutMain";
import { VideoA11y } from "./VideoA11y";
import { VideoNotA11y } from "./VideoNotA11y";

export const Video = () => {
  return (
    <LayoutMain
      title="Video"
      accessible={<VideoA11y />}
      notAccessible={<VideoNotA11y />}
    />
  );
};
