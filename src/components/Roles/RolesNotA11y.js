import React from "react";

export const RolesNotA11y = () => {
  return (
    <>
      <section>
        <p>rol button with state pressed or selected</p>
        <div
          className="roleButton"
          id="roleButtonTwo"
          role="button"
          aria-pressed="true"
          selected={true}
        >
          This is a button
        </div>
      </section>
      <section>
        <ul>
          <li>
            Analyze the use of the component to be able to use the correct aria
          </li>
          <li>
            You can't use the button with attribute <code>selected</code>
          </li>
          <li>
            Use the all attributes to make a11y button or component, this
            component is not focusable
          </li>
          <li>
            The <code>tabindex</code> is important to correct navigation: value{" "}
            <b>-1</b> hide the element of the navigation with key tab and{" "}
            <b>0</b> is for sequential order
          </li>
        </ul>
      </section>
    </>
  );
};
