import React, { useState } from "react";

import { BiLinkExternal } from "react-icons/bi";

export const DropdownA11y = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <section className="container-dropdown">
        <div>
          <button
            className="button-collapsible"
            id="first-element-header"
            aria-controls="first-element-panel"
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            Option one dropdown
          </button>
        </div>
        <div
          className="section-collapsible"
          id="first-element-panel"
          aria-labelledby="first-element-header"
          hidden={!isExpanded}
        >
          more text
        </div>
      </section>
      <section>
        <ul>
          <li>
            Always use{" "}
            <a
              className="anchor-dropdown"
              href="https://www.digitala11y.com/wai-aria-1-1-cheat-sheet/"
              target="_blank"
            >
              ARIA
              <span className="screen-reader-new-tab">(open in new tab)</span>
              <BiLinkExternal />
            </a>{" "}
            to make a11y components
          </li>
          <li>This component used</li>
        </ul>
      </section>
    </>
  );
};
