import React from 'react';
import '../css/app.scss';
import Hamburger from './components/Hamburger';
import PicContainer from './components/PicContainer';
import StoryContainer from './components/StoryContainer';
import NavBtns from './components/NavBtns';

class App extends React.Component {

  state = {
    hamburgerOpen: false,
  }

  toggleHamburger = () => {
    this.setState(prevState => {
      return {
        hamburgerOpen: !prevState.hamburgerOpen
      }
    }, () => console.log(this.state));
  }

  render() {
    return <div className="app">
        <Hamburger open={this.state.hamburgerOpen} toggle={this.toggleHamburger} />

        <Header />

        <PicContainer />
        <StoryContainer />

        <NavBtns />
      </div>;
  }
}


const Header = () => {
  return <h1 className="header">Memoir</h1>;
};


export default App;