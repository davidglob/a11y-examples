import React from "react";
import { BiLinkExternal } from "react-icons/bi";

export const SimplesemanticA11y = () => {
  return (
    <>
      <section>
        <p>
          Exist two ways to make a good landmarks, the first is with semantic
          html and the second is with ARIA
        </p>
        <p>
          The two option are correct but the good practices is use semantic html
          with ARIA
        </p>
        <iframe
          title="semantic html with aria"
          src="https://codepen.io/dfloresdev/embed/eYBReLj?default-tab=html&amp;line-numbers=true&amp;height=350"
          width="90%"
          height="350px"
        ></iframe>
        <iframe
          title="structure only with aria"
          src="https://codepen.io/dfloresdev/embed/zYozRxB?default-tab=html&amp;line-numbers=true&amp;height=350"
          width="90%"
          height="350px"
        ></iframe>
      </section>
      <section>
        <ul>
          <li>
            With this tips you can resolve all issues related with{" "}
            <b>landmarks</b>
          </li>
          <li>
            <a
              className="anchor-dropdown"
              target="_blank"
              href="https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html"
            >
              This is a example you can read all about the landmarks
              <span className="screen-reader-new-tab">(open in new tab)</span>
              <BiLinkExternal />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};
