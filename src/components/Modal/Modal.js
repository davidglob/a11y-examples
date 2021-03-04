import React, { useState, useRef, useEffect } from "react";
import { LayoutMain } from "../../pages/LayoutMain/LayoutMain";
import { ModalA11y } from "./ModalA11y";
import { ModalNotA11y } from "./ModalNotA11y";

import "./Modal.scss";

export const Modal = () => {
  const focusRef = useRef(null);

  useEffect(() => {
    // focusRef.current.focus();
    console.log(focusRef);
  }, []);

  return (
    <LayoutMain
      ref={focusRef}
      title="Modal"
      accessible={<ModalA11y />}
      notAccessible={<ModalNotA11y />}
    />
  );
};

// import React, { Component } from "react";
// import { LayoutMain } from "../../pages/LayoutMain/LayoutMain";
// import { ModalA11y } from "./ModalA11y";
// import { ModalNotA11y } from "./ModalNotA11y";
// export class Modal extends Component {
//   componentDidMount() {
//     // this.mainContent.component.focus();
//     console.log(this.mainContent);
//   }
//   render() {
//     return (
//       <LayoutMain
//         ref={(inputEl) => (this.mainContent = inputEl)}
//         title="Modal"
//         accessible={<ModalA11y />}
//         notAccessible={<ModalNotA11y />}
//       />
//       // <input ref={(inputEl) => (this.mainContent = inputEl)} />
//     );
//   }
// }
