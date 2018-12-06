import React from 'react';
import PicContainer from "./PicContainer";
import StoryContainer from "./StoryContainer";
import withStoreData from '../context/withStoreData';

class ContentContainer extends React.PureComponent {

  state = {
    pic: null,
    story: null
  }

  componentDidMount() {}
  
  componentDidUpdate(prevProps, prevState) {
    if(!prevState.pic) {
      this.setState({
        pic: this.props.store.pics[this.props.store.idx],
        story: this.props.store.pics[this.props.store.idx].story
      }, () => console.log(this.state))
    }

    if(prevProps.store.idx !== this.props.store.idx && this.state.pic !== this.props.store.pics[this.props.store.idx]) {
      this.setState({
        pic: this.props.store.pics[this.props.store.idx],
        story: this.props.store.pics[this.props.store.idx].story
      }, () => console.log(this.state))
    }
  }

  render() {
    const { pic, story } = this.state
    return (
      <>
        <PicContainer pic={pic ? pic.secure_url : null} caption={story ? story.caption : null} />
        <StoryContainer 
          title={story ? story.title : null} 
          desc={story ? story.desc : null} 
          location={story ? story.location : null}
          tip={story ? story.tip : null}
          worth={story ? story.worth : null}
        />
      </>
    )
  }
}

export default withStoreData(ContentContainer);