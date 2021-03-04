import React from "react";
import { LayoutMain } from "../../pages/LayoutMain/LayoutMain";
import { SimplesemanticA11y } from "./SimplesemanticA11y";
import { SimplesemanticNotA11y } from "./SimplesemanticNotA11y";

export const Simplesemantic = () => {
  return (
    <LayoutMain
      title="Simple semantic"
      accessible={<SimplesemanticA11y />}
      notAccessible={<SimplesemanticNotA11y />}
    />
  );
};
