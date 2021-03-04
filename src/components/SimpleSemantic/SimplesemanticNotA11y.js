import React from "react";
import { BiLinkExternal } from "react-icons/bi";

export const SimplesemanticNotA11y = () => {
  return (
    <>
      <section>
        <iframe
          title="bad structure html"
          src="https://codepen.io/dfloresdev/embed/bGBRLWy?default-tab=html&amp;line-numbers=true&amp;height=350"
          width="90%"
          height="350px"
        ></iframe>
      </section>
      <section>
        <ul>
          <li>Never use that structure because is a violation</li>
          <li>
            The landmarks are necessary to identify regions of a page,
            <a
              className="anchor-dropdown"
              target="_blank"
              href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11"
            >
              In this link you can read all information about this topic
              <span className="screen-reader-new-tab">(open in new tab)</span>
              <BiLinkExternal />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};
