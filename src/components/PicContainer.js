import React from 'react';
import NavBtns from "./NavBtns";

class PicContainer extends React.PureComponent {

  state = {
    picLoaded: false,
    showThumbnail: false
  }

  componentDidMount() {
    this.handleFallback();
  }

  componentDidUpdate(prevProps, prevState) {

    if(!prevState.showThumbnail && this.state.showThumbnail) {
      return
    }

    if(prevProps.pic !== this.props.pic && prevState.picLoaded) {
      console.log(`update`)
      this.setState({
        picLoaded: false,
        showThumbnail: false
      })
      this.handleFallback();
    }
  }

  handleFallback = () => {
    let count = 0;
    this.interval = setInterval(() => {
      count += 100;
      if (!this.state.showThumbnail && count >= 500) {
        this.setState({
          showThumbnail: true,
        }, () => console.log(`fallback`))
        clearInterval(this.interval);
      }
      if(count > 500 && !this.state.showThumbnail) {
        clearInterval(this.interval);
      }
    }, 100)
  }

  handleGoodPicLoad = () => {
    this.setState({
      picLoaded: true,
    }, () => console.log(this.state))
  }
  
  render() {
    const { pic, caption } = this.props;
    const { picLoaded, showThumbnail } = this.state;

    return (
      <aside className="left">
        <figure className="left__wrapper">

          {pic && !picLoaded && showThumbnail ? (
            <Picture 
              classes="left__pic" 
              sizes="100%" 
              src={pic} 
              alt="" 
              thumbnail 
            />
          ) : null}

          {pic ? (
            <Picture 
              classes={picLoaded ? "left__pic" : "hide"} 
              sizes="100%" 
              src={pic} 
              alt="" 
              handleLoaded={this.handleGoodPicLoad}
            />
          ) : null}
            
          <Caption text={caption} />

        </figure>

        <NavBtns />
      </aside>
    )
  }
}


const Picture = ({ sizes, src, alt, thumbnail, handleLoaded, classes }) => {

  const diffResolutions = [
    ["q_auto,f_auto,w_256", "256w", "q_10,w_256"],
    ["q_auto,f_auto,w_768", "768w", "q_10,w_768"],
    ["q_auto,f_auto,w_1024", "1024w", "q_10,w_1024"],
    ["q_auto,f_auto,w_1280", "1280w", "q_10,w_1280"],
    ["q_auto,f_auto,w_1360", "1360w", "q_10,w_1360"],
    ["q_auto,f_auto,w_1440", "1440w", "q_10,w_1440"],
    ["q_auto,f_auto,w_1920", "1920w", "q_10,w_1920"],
  ]

  const insertSpot = src.substring(44, 52);
  let srcSet = src;

  if(insertSpot === "/upload/") {

    for(let i=0; i<diffResolutions.length; i++) {
      let el = diffResolutions[i];

      srcSet += src.replace(insertSpot, insertSpot + (thumbnail ? el[2] : el[0]) + '/') + ` ${el[1]}`;

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
      className={classes}
      sizes={sizes}
      srcSet={srcSet}
      alt={alt}
      onMouseOver={handleHover}
      onLoad={handleLoaded}
    />
  );
};

const Caption = ({ text }) => {
  return <figcaption className="left__caption">{text}</figcaption>;
};


export default PicContainer;