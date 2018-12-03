import React from 'react';
import Picture from "./Picture";
import Caption from "./Caption";
import NavBtns from "./NavBtns";

const PicContainer = () => {
  return (
    <aside className="left">
      <figure className="left__wrapper">
        {/* <Picture src="https://i1.wp.com/literaturesandmovies.com/wp-content/uploads/2017/05/bezc2a0tytuc582u-1.png?fit=338%2C467&ssl=1" alt='' /> */}
        <Picture sizes="100%" src="https://res.cloudinary.com/pablopawpaw/image/upload/w_512/memoir/IMG_9853.jpg" srcset="https://res.cloudinary.com/pablopawpaw/image/upload/w_256/memoir/IMG_9853.jpg 256w, https://res.cloudinary.com/pablopawpaw/image/upload/w_512/memoir/IMG_9853.jpg 512w, https://res.cloudinary.com/pablopawpaw/image/upload/w_768/memoir/IMG_9853.jpg 768w, https://res.cloudinary.com/pablopawpaw/image/upload/w_1024/memoir/IMG_9853.jpg 1024w, https://res.cloudinary.com/pablopawpaw/image/upload/w_1280/memoir/IMG_9853.jpg 1280w, https://res.cloudinary.com/pablopawpaw/image/upload/w_1360/memoir/IMG_9853.jpg 1360w, https://res.cloudinary.com/pablopawpaw/image/upload/w_1440/memoir/IMG_9853.jpg 1440w, https://res.cloudinary.com/pablopawpaw/image/upload/w_1920/memoir/IMG_9853.jpg 1920w" alt="" />
        <Caption text="what is life" />
      </figure>
      <NavBtns />
    </aside>
  )
}

export default PicContainer;