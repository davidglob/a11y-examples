import React from "react";
import { LayoutMain } from "../../pages/LayoutMain/LayoutMain";
import { FormA11y } from "./FormA11y";
import { FormNotA11y } from "./FormNotA11y";

export const Form = () => {
  return (
    <LayoutMain
      title="Form"
      accessible={<FormA11y />}
      notAccessible={<FormNotA11y />}
    />
  );
};
