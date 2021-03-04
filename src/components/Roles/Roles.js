import React from "react";
import { LayoutMain } from "../../pages/LayoutMain/LayoutMain";
import { RolesA11y } from "./RolesA11y";
import { RolesNotA11y } from "./RolesNotA11y";

export const Roles = () => {
  return (
    <LayoutMain
      title="Roles"
      accessible={<RolesA11y />}
      notAccessible={<RolesNotA11y />}
    />
  );
};
