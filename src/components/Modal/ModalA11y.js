import React, { useState } from "react";

import { ModalPortal } from "./ModalPortal/ModalPortal";

export const ModalA11y = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <section>
        <button onClick={() => setIsModalVisible(true)}>Modal</button>
        {isModalVisible && (
          <ModalPortal onModalClose={() => setIsModalVisible(false)}>
            <ModalPortal.Header>Header</ModalPortal.Header>
            <ModalPortal.Body>Body</ModalPortal.Body>
            <ModalPortal.Footer>
              <ModalPortal.Footer.CloseBtn>Close</ModalPortal.Footer.CloseBtn>
            </ModalPortal.Footer>
          </ModalPortal>
        )}
      </section>
      <section>
        <ul>
          <li>return node</li>
          <li>
            Implement this: https://github.com/facebook/react/issues/16009
          </li>
        </ul>
      </section>
    </>
  );
};
