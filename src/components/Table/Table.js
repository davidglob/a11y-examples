import React from "react";
import { LayoutMain } from "../../pages/LayoutMain/LayoutMain";
import { TableA11y } from "./TableA11y";
import { TableNotA11y } from "./TableNotA11y";

export const Table = () => {
  return (
    <LayoutMain
      title="Table"
      accessible={<TableA11y />}
      notAccessible={<TableNotA11y />}
    />
  );
};
