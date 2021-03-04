import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import "./Welcome.scss";

export const Welcome = () => {
  return (
    <>
      <section>
        <h1>Welcome to this guide a11y for developers</h1>
      </section>
      <section className="message">
        <h2>Important!</h2>
        <p>
          There are multiples ways to make the web accessible, this is just a
          one of the millions of ways to solve this topic.
        </p>
      </section>
      <section>
        <h3>Notes</h3>
        <ul>
          <li>Don't add icons with css</li>
          <li>
            The <b>Axe Tool</b> only check the semantic structure, does not
            verify interaction with states or correct use of aria
          </li>
          <li>
            The first rule of ARIA is: if a <b>native HTML element</b> or
            attribute has the semantics and <b>behavior you require, use it</b>{" "}
            instead of re-purposing an element and adding an ARIA role, state or
            property to make it accessible.
          </li>
          <li>
            Never use <code>aria-hidden="true"</code> o{" "}
            <code>role="presentation"</code> on elements that need focus
          </li>
          <li>
            The tag <code>div</code> it's not a tortilla to contain whatever,
            use the correct landmark to define the correct structure, such as:
            <ul>
              <li>nav</li>
              <li>aside</li>
              <li>footer</li>
              <li>header</li>
              <li>main</li>
            </ul>
          </li>
          <li>
            With automated tests we can only detect 20% to 50% of accessibility
            problems
          </li>
        </ul>
      </section>
      <section>
        <h3>Tools</h3>
        <ul>
          <li>
            <a
              className="anchor-dropdown"
              target="_blank"
              href="https://dequeuniversity.com/rules/axe/3.5/color-contrast"
            >
              Color contrast
              <span className="screen-reader-new-tab">(open in new tab)</span>
              <BiLinkExternal />
            </a>
          </li>
          <li>
            <a
              className="anchor-dropdown"
              target="_blank"
              href="https://www.w3.org/WAI/demos/bad/after/home.html"
            >
              Before and After Demonstration
              <span className="screen-reader-new-tab">(open in new tab)</span>
              <BiLinkExternal />
            </a>
          </li>
          <li>
            <a
              className="anchor-dropdown"
              target="_blank"
              href="https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd?hl=en"
            >
              Axe - web accessibility testing
              <span className="screen-reader-new-tab">(open in new tab)</span>
              <BiLinkExternal />
            </a>
          </li>
          <li>
            <a
              className="anchor-dropdown"
              target="_blank"
              href="https://chrome.google.com/webstore/detail/arc-toolkit/chdkkkccnlfncngelccgbgfmjebmkmce"
            >
              Arc toolkit
              <span className="screen-reader-new-tab">(open in new tab)</span>
              <BiLinkExternal />
            </a>
          </li>
          <li>
            <a
              className="anchor-dropdown"
              target="_blank"
              href="https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&currentsidebar=%23col_overview&levels=aaa"
            >
              Specif rules
              <span className="screen-reader-new-tab">(open in new tab)</span>
              <BiLinkExternal />
            </a>
          </li>
          <li>
            <a
              className="anchor-dropdown"
              target="_blank"
              href="https://codyhouse.co/"
            >
              A11y example components
              <span className="screen-reader-new-tab">(open in new tab)</span>
              <BiLinkExternal />
            </a>
          </li>
          <li>
            <a
              className="anchor-dropdown"
              target="_blank"
              href="https://www.ibm.com/able/"
            >
              IBM a11y
              <span className="screen-reader-new-tab">(open in new tab)</span>
              <BiLinkExternal />
            </a>
          </li>
        </ul>
        <h3>
          <a
            className="anchor-dropdown"
            target="_blank"
            href="https://github.com/davidglob/a11y-examples"
          >
            Repository
            <span className="screen-reader-new-tab">(open in new tab)</span>
            <BiLinkExternal />
          </a>
        </h3>
      </section>
    </>
  );
};
