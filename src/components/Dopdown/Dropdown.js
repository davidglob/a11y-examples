import React from "react";
import { LayoutMain } from "../../pages/LayoutMain/LayoutMain";
import { DropdownA11y } from "./DropdownA11y";
import { DropdownNotA11y } from "./DropdownNotA11y";

import "./Dropdown.scss";

export const Dropdown = () => {
  return (
    <LayoutMain
      title="Dropdown"
      accessible={<DropdownA11y />}
      notAccessible={<DropdownNotA11y />}
    />
  );
};
