import React, { useState } from "react";

export const FormA11y = () => {
  const [formState_a11y, setFormState_a11y] = useState({
    firstName_a11y: "",
    lastName_a11y: "",
    email_a11y: "",
  });

  const [inputValidation_a11y, setInputValidation_a11y] = useState({
    firstName_a11y: "",
    lastName_a11y: "",
    email_a11y: "",
  });

  let changeForm_a11y = (e) => {
    setFormState_a11y({
      ...formState_a11y,
      [e.target.name]: e.target.value,
    });
  };

  let validateInput = () => {
    if (formState_a11y.firstName_a11y.length > 7) {
      setInputValidation_a11y({
        ...setInputValidation_a11y,
        firstName_a11y: true,
      });
    } else {
      setInputValidation_a11y({
        ...setInputValidation_a11y,
        firstName_a11y: false,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <div className="form-not-a11y-container">
            <p>Register</p>
            <p>Please fill the form</p>
            <label htmlFor="firstName_a11y">First Name</label>
            <input
              type="text"
              id="firstName_a11y"
              name="firstName_a11y"
              aria-describedby="pw-hint"
              required
              onChange={changeForm_a11y}
              value={formState_a11y.firstName_a11y}
              onBlur={validateInput}
            />
            <div
              role="alert"
              className={`input-error ${
                inputValidation_a11y.firstName_a11y ? "show-error" : ""
              }`}
              aria-hidden={!inputValidation_a11y.firstName_a11y}
              id="pw-hint"
            >
              <p>
                {inputValidation_a11y.firstName_a11y ? "Text is to long" : ""}
              </p>
            </div>

            <input
              type="text"
              id="lastName_a11y"
              name="lastName_a11y"
              placeholder="Last Name"
              aria-label="Last Name"
              onChange={changeForm_a11y}
              value={formState_a11y.lastName_a11y}
              className="input-no-label"
            />

            <label htmlFor="email_a11y">email</label>
            <input
              type="email"
              id="email_a11y"
              name="email_a11y"
              onChange={changeForm_a11y}
              value={formState_a11y.email_a11y}
            />
            <input type="submit" value="Send Info" />
          </div>
        </form>
      </section>
      <section>
        <p>Notes:</p>
        <ol>
          <li>
            With semantic html you can use all of your attributes without
            troubles, in this case the attribute <code>required</code>
          </li>
          <li>
            If you don't want to use tag <code>label</code>, ypu must use{" "}
            <code>aria-label</code> to indicate the screen reader the name of
            the input
          </li>
        </ol>
      </section>
    </>
  );
};
