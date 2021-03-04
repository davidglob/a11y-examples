import React from "react";

export const ImagesNotA11y = () => {
  return (
    <>
      <section>
        <div>
          <h3>Decorative image</h3>
          <img
            className="image-container"
            src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/68D64DAE-9605-42AC-BDCF-328A509EC776/Derivates/7AC0E9FD-F0DA-410B-9D78-19D3C3BEA1F3.jpg"
          />
          <p>Text about the image</p>
        </div>
        <div>
          <h3>Decorative image</h3>
          <img
            className="image-container"
            src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/68D64DAE-9605-42AC-BDCF-328A509EC776/Derivates/7AC0E9FD-F0DA-410B-9D78-19D3C3BEA1F3.jpg"
          />
          <p>Text about the image</p>
        </div>
      </section>
      <section>
        <ul>
          <li>
            Never use image without attribute <code>alt</code>
          </li>
        </ul>
      </section>
    </>
  );
};
