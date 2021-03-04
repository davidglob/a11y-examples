import React from "react";

export const SelectboxA11y = () => {
  return (
    <>
      <section>
        <div>
          <input
            id="firstCheckbox"
            type="checkbox"
            role="checkbox"
            aria-checked="false"
            aria-labelledby="labelFirstCheckbox"
          />
          <label id="labelFirstCheckbox" htmlFor="firstCheckbox">
            First checkbox
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            aria-checked="true"
            tabIndex="0"
            id="secondCheckbox"
            defaultChecked="true"
            aria-labelledby="labelSecondCheckbox"
          />
          <label id="labelSecondCheckbox" htmlFor="secondCheckbox">
            Second checkbox
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            aria-checked="true"
            tabIndex="0"
            id="thirdCheckbox"
            defaultChecked="true"
            aria-labelledby="labelThirdCheckbox"
          />
          <label id="labelThirdCheckbox" htmlFor="thirdCheckbox">
            Third checkbox
          </label>
        </div>
      </section>
      <section>
        <ul>
          <li>
            https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/examples/checkbox/checkbox-2.html
          </li>
        </ul>
      </section>
    </>
  );
};
