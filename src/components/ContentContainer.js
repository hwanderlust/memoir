import React from 'react';
import PicContainer from "./PicContainer";
import StoryContainer from "./StoryContainer";
import withStoreData from '../context/withStoreData';

class ContentContainer extends React.PureComponent {

  state = {
    pic: null,
  }

  componentDidMount() {}
  
  componentDidUpdate(prevProps, prevState) {
    if(!prevState.pic) {
      this.setState({
        pic: this.props.store.pics[this.props.store.idx]
      }, () => console.log(this.state))
    }

    if(prevProps.store.idx !== this.props.store.idx && this.state.pic !== this.props.store.pics[this.props.store.idx]) {
      this.setState({
        pic: this.props.store.pics[this.props.store.idx]
      }, () => console.log(this.state))
    }
  }

  render() {
    return (
      <>
        <PicContainer pic={this.state.pic} />
        <StoryContainer />
      </>
    )
  }
}

export default withStoreData(ContentContainer);