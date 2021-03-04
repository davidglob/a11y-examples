import React from "react";
import { LayoutMain } from "../../pages/LayoutMain/LayoutMain";
import { LinksA11y } from "./LinksA11y";
import { LinksNotA11y } from "./LinksNotA11y";

export const Links = () => {
  return (
    <LayoutMain
      title="Links"
      accessible={<LinksA11y />}
      notAccessible={<LinksNotA11y />}
    />
  );
};
