import React from "react";
import { BiLinkExternal } from "react-icons/bi";

export const LinksNotA11y = () => {
  return (
    <>
      <section>
        <p>
          This is a text with external <a href="">link</a>
        </p>
        <p>
          This is a text with internal{" "}
          <a href="/welcome" target="_blank">
            link
          </a>
        </p>
      </section>
      <section>
        <p>Notes:</p>
        <ol>
          <li>
            With semantic html you can use all of your attributes without
            troubles, in this case the attribute <code>required</code>
          </li>
          <li>Always open the external link in new tab</li>
        </ol>
      </section>
    </>
  );
};
