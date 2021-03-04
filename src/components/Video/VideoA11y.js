import React from "react";

export const VideoA11y = () => {
  return (
    <>
      <section>
        <iframe
          title="video example a11y"
          width="90%"
          height="315"
          src="https://www.youtube.com/embed/grrx2Lva7T0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
      <section>
        <ul>
          <li>The video need:</li>
          <ul>
            <li>Captions</li>
            <li>Controls</li>
            <li>Option to disable video</li>
          </ul>
        </ul>
      </section>
    </>
  );
};
