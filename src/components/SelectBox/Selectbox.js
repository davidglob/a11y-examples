import React from "react";
import { LayoutMain } from "../../pages/LayoutMain/LayoutMain";
import { SelectboxA11y } from "./SelectboxA11y";
import { SelectboxNotA11y } from "./SelectboxNotA11y";

import "./Selectbox.scss";

export const Selectbox = () => {
  return (
    <LayoutMain
      title="Selectbox"
      accessible={<SelectboxA11y />}
      notAccessible={<SelectboxNotA11y />}
    />
  );
};
