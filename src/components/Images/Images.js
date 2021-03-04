import React from "react";
import { LayoutMain } from "../../pages/LayoutMain/LayoutMain";
import { ImagesA11y } from "./ImagesA11y";
import { ImagesNotA11y } from "./ImagesNotA11y";

import "./Images.scss";

export const Images = () => {
  return (
    <LayoutMain
      title="Images"
      accessible={<ImagesA11y />}
      notAccessible={<ImagesNotA11y />}
    />
  );
};
