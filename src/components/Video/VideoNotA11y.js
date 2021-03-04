import React from "react";

export const VideoNotA11y = () => {
  return (
    <>
      <section>
        <iframe
          title="video not a11y"
          width="90%"
          height="315"
          src="https://www.youtube.com/embed/5nMBmFlvS18"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
      <section></section>
    </>
  );
};
