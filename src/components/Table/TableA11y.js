import React from "react";

export const TableA11y = () => {
  return (
    <>
      <section>
        <table>
          <caption>Shelly's Daughters</caption>

          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Birthday</th>
          </tr>

          <tr>
            <th scope="row">Jackie</th>
            <td>5</td>
            <td>April 5</td>
          </tr>

          <tr>
            <th scope="row">Beth</th>
            <td>8</td>
            <td>January 14</td>
          </tr>
        </table>
      </section>
      <section>
        <ul>
          <li>
            All table need a <code>caption</code>
          </li>
          <li>
            Define de <code>scope</code> of the table
          </li>
        </ul>
      </section>
    </>
  );
};
