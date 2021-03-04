import React from "react";

import "./Roles.scss";

export const RolesA11y = () => {
  return (
    <>
      <section>
        <div role="heading" aria-level="3">
          This is a div with behavior of a level 3 header
        </div>
        <div className="roleButton" id="roleButton" tabIndex="0" role="button">
          This is a button
        </div>
      </section>
      <section>
        <ul>
          <li>The most common use is for change the behavior of the tag</li>
          <li>
            This is useful when you want to change the style without affecting
            others similar tags
          </li>
          <li>The styles are important to identify the interactive elements</li>
        </ul>
      </section>
    </>
  );
};
