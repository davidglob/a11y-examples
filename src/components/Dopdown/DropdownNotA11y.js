import React, { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";

export const DropdownNotA11y = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <section className="container-dropdown">
        <div>
          <button
            className="button-collapsible"
            id="first-elemento-header"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            Option one dropdown
          </button>
        </div>
        <section id="first-elemento-panel" hidden={!isExpanded}>
          more text
        </section>
      </section>
      <section>
        <ul>
          <li>The operation is correct, but it is not a11y</li>
          <li>See the result with screen reader:</li>
          <li>
            <figure>
              <img
                alt="gif image with the screen reader work"
                width="100%"
                src="https://drive.google.com/uc?export=view&id=1XdTP50YAEb3-G-WEbMS3bzi9GxSDQT40"
              />
            </figure>
          </li>
          <li>
            See the complete image{" "}
            <a
              className="anchor-dropdown"
              href="https://drive.google.com/file/d/1XdTP50YAEb3-G-WEbMS3bzi9GxSDQT40/view?usp=sharing"
              target="_blank"
            >
              here
              <span className="screen-reader-new-tab">(open in new tab)</span>
              <BiLinkExternal />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};
