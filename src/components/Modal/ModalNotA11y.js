import React, { useState } from "react";
const AriaModal = require("../BasicModal/react-aria-modal");

export const ModalNotA11y = () => {
  const [modalActive, setModalActive] = useState(false);

  let getApplicationNode = () => {
    return document.getElementById("main-content");
  };

  return (
    <>
      <section>
        <button onClick={() => setModalActive(!modalActive)}>Modal</button>
        {modalActive && (
          <AriaModal
            titleText="demo one"
            onExit={() => setModalActive(false)}
            getApplicationNode={getApplicationNode}
            initialFocus="#close-modal"
            underlayStyle={{ paddingTop: "2em" }}
            // titleText="demo seven"
            // onExit={() => setModalActive(false)}
            // getApplicationNode={getApplicationNode}
            // initialFocus="#demo-one-modal"
            // includeDefaultStyles={false}
            // underlayClass="demo-seven__underlay"
            // dialogClass="demo-seven__dialog"
            // dialogStyle={{ color: "green" }}
          >
            <div id="demo-one-modal" className="modal">
              <div className="modal-header">
                <p>Title Header</p>
                <button id="close-modal" aria-label="Close modal">
                  X
                </button>
              </div>
              <div className="modal-body">
                <p>
                  Here is a modal <a href="#">with</a> <a href="#">some</a>{" "}
                  <a href="#">focusable</a> parts.
                </p>
              </div>
              <footer className="modal-footer">
                <button
                  id="demo-one-deactivate"
                  onClick={() => setModalActive(false)}
                >
                  deactivate modal
                </button>
              </footer>
            </div>
          </AriaModal>
        )}
      </section>
      <section>
        <ul>
          <li>no return node</li>
          <li>tab index</li>
          <li>error whit tab, jump to main page</li>
        </ul>
      </section>
    </>
  );
};
