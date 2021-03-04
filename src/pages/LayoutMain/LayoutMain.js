import React from "react";
import "./LayoutMain.scss";

export const LayoutMain = ({ title, accessible, notAccessible }) => {
  return (
    <div className="main-grid">
      <div className="main-grid__title">
        <h1>{title}</h1>
      </div>
      <section className="main-grid__accessible">
        <h2>Accessible Element</h2>
        {accessible}
      </section>
      <section className="main-grid__notaccessible">
        <h2>Element not Accessible</h2>
        {notAccessible}
      </section>
    </div>
  );
};
