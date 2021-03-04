import React from "react";
import { LayoutMain } from "../../pages/LayoutMain/LayoutMain";
import { ToastA11y } from "./ToastA11y";
import { ToastNotA11y } from "./ToastNotA11y";

export const Toast = () => {
  return (
    <LayoutMain
      title="Toast"
      accessible={<ToastA11y />}
      notAccessible={<ToastNotA11y />}
    />
  );
};
