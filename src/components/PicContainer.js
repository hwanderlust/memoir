import React from 'react';
import NavBtns from "./NavBtns";
import withStoreData from '../context/withStoreData';

const PicContainer = ({ store }) => {
  
  console.log(store);

  return (
    <aside className="left">
      <figure className="left__wrapper">

        {store.pics ? <Picture sizes="100%" src={store.pics[store.idx].secure_url} alt="" /> : null}
          
        <Caption text="what is life" />

      </figure>

      <NavBtns />
    </aside>
  )
}


const Picture = ({ sizes, src, alt, low }) => {

  const diffResolutions = [
    ["w_256", "256w"],
    ["w_768", "768w"],
    ["w_1024", "1024w"],
    ["w_1280", "1280w"],
    ["w_1360", "1360w"],
    ["w_1440", "1440w"],
    ["w_1920", "1920w"],
  ]

  const insertSpot = src.substring(44, 52);
  let srcSet = src;

  if(insertSpot === "/upload/") {

    for(let i=0; i<diffResolutions.length; i++) {
      let el = diffResolutions[i];

      srcSet += src.replace(insertSpot, insertSpot + (low ? "q_20," + el[0] : el[0]) + '/') + ` ${el[1]}`;

      if(i !== (diffResolutions.length - 1)) {
        srcSet += ", ";
      }
    }
  }

  const handleHover = (e) => {
    console.log('hovering')
  }
  

  return (
    <img
      className="left__pic"
      sizes={sizes}
      srcSet={srcSet}
      alt={alt}
      onMouseOver={handleHover}
    />
  );
};

const Caption = ({ text }) => {
  return <figcaption className="left__caption">{text}</figcaption>;
};


export default withStoreData(PicContainer);