import React, { useState } from "react";
import "./Form.scss";

export const FormNotA11y = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  let changeForm = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <>
      <section>
        <div>
          <div className="form-not-a11y-container">
            <p>Register</p>
            <p>Please fill the form</p>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={changeForm}
              value={formState.firstName}
            />
            <p
              className={`input-error ${
                formState.firstName.length > 7 ? "show-error" : ""
              }`}
            >
              Error with the info
            </p>

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={changeForm}
              value={formState.lastName}
            />
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={changeForm}
              value={formState.email}
            />
            <input type="submit" value="Send Info" onClick={handleSubmit} />
          </div>
        </div>
      </section>

      <section>
        <p>Notes:</p>
        <ol>
          <li>
            Never use a input inside of label, because some screen reader do not
            support it
          </li>
          <li>
            Use <code>input type submit</code> for forms and buttons for
            everything else
          </li>
          <li>
            Never remove the <code>outline</code> in css of <code>inputs</code>
          </li>
          <li>
            Use a correct description about the <code>errors</code>
          </li>
          <li>
            Use <code>aria-hidden</code> to hidden elements instead of{" "}
            <code>display: none</code>
          </li>
        </ol>
      </section>
    </>
  );
};
