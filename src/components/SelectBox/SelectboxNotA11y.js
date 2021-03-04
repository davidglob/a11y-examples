import React from "react";

export const SelectboxNotA11y = () => {
  return (
    <>
      <section>
        <div>
          <input type="checkbox"></input>
        </div>
        <div>
          <input type="checkbox" checked="true"></input>
        </div>
        <div>
          <input type="checkbox" checked="true" disabled="true"></input>
        </div>
      </section>
      <section>
        <ul>
          <li>
            Use the tag <code>label</code> with each checkbox
          </li>
          <li>
            use <code>aria-labelledby</code> to announce the purpose of the
            element
          </li>
        </ul>
      </section>
    </>
  );
};
