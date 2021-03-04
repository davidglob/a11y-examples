import React from "react";
import { BiLinkExternal } from "react-icons/bi";

export const LinksA11y = () => {
  return (
    <>
      <section>
        <p>
          This is a text{" "}
          <a href="" target="_blank">
            with external link{" "}
            <span className="screen-reader-new-tab">(open in new tab)</span>
            <BiLinkExternal />
          </a>
        </p>
        <p>
          This is a text with internal <a href="/welcome">link to home</a>
        </p>
      </section>
      <section>
        <p>Notes:</p>
        <ol>
          <li>
            Always indicate if the links are external with <b>icon</b> and the
            <b> span</b>. This is necessary to the screen reader
          </li>
          <li>
            Never remove the underline of the tag <code>a</code>
          </li>
          <li>
            Hide the <code>span</code> onside of the anchor tag (inspect the
            element with external link)
          </li>
          <li>Use different descriptive text</li>
          <li>
            Never use <code>target="_blank"</code> with{" "}
            <code>rel="noreferrer" and rel="noopener"</code> for{" "}
            <a
              className="anchor-dropdown"
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#security_and_privacy"
            >
              more information here
              <span className="screen-reader-new-tab">(open in new tab)</span>
              <BiLinkExternal />
            </a>
          </li>
        </ol>
      </section>
    </>
  );
};
