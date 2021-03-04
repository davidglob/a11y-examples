import React from "react";

export const TableNotA11y = () => {
  return (
    <>
      <section>
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Birthday</th>
          </tr>

          <tr>
            <th>Jackie</th>
            <td>5</td>
            <td>April 5</td>
          </tr>

          <tr>
            <th>Beth</th>
            <td>8</td>
            <td>January 14</td>
          </tr>
        </table>
      </section>
      <section>
        <ul>
          <li>the result is similar but does not have good practices</li>
        </ul>
      </section>
    </>
  );
};
