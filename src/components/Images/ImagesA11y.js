import React from "react";

export const ImagesA11y = () => {
  return (
    <>
      <section>
        <h3>Decorative image</h3>
        <figure>
          <img
            className="image-container"
            alt=""
            src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/68D64DAE-9605-42AC-BDCF-328A509EC776/Derivates/7AC0E9FD-F0DA-410B-9D78-19D3C3BEA1F3.jpg"
          />
          <figcaption>
            Decorative image (the value of attribute <code>alt</code> is empty)
          </figcaption>
        </figure>
      </section>
      <section>
        <div className="heading-aria-role" role="heading" aria-level="3">
          Image of tamales
        </div>
        <figure>
          <img
            className="image-container"
            alt="Delicious mexican tamales"
            src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/68D64DAE-9605-42AC-BDCF-328A509EC776/Derivates/7AC0E9FD-F0DA-410B-9D78-19D3C3BEA1F3.jpg"
          />
          <figcaption>Text about the image</figcaption>
        </figure>
      </section>
      <section>
        <ul>
          <li>
            You can use "aria role" to define the behavior of tag, the most
            common use case is to apply different styles to tag (inspect the
            header color red)
          </li>
          <li>
            Is a good practice use the tag <code>figure</code> with image but
            not mandatory
          </li>
          <li>
            Always use the attribute <code>alt</code> with images
          </li>
        </ul>
      </section>
    </>
  );
};
