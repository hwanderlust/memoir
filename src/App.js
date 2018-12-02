import React from 'react';
import '../css/app.scss';
import Hamburger from './components/Hamburger';
import Picture from './components/Picture';
import Caption from './components/Caption';
import Title from './components/Title';
import Desc from './components/Desc';
import Category from './components/Category';
import Detail from './components/Detail';
import Header from './components/Header';
// import NavBtn from './components/NavBtn';
import LeftBtn from './components/LeftBtn';
import RightBtn from './components/RightBtn';

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

        <aside className="left">
          <figure className="left__wrapper">
            {/* <Picture src="https://i1.wp.com/literaturesandmovies.com/wp-content/uploads/2017/05/bezc2a0tytuc582u-1.png?fit=338%2C467&ssl=1" alt='' /> */}
            <Picture sizes="100%" src="https://res.cloudinary.com/pablopawpaw/image/upload/w_512/memoir/IMG_9853.jpg" srcset="https://res.cloudinary.com/pablopawpaw/image/upload/w_256/memoir/IMG_9853.jpg 256w, https://res.cloudinary.com/pablopawpaw/image/upload/w_512/memoir/IMG_9853.jpg 512w, https://res.cloudinary.com/pablopawpaw/image/upload/w_768/memoir/IMG_9853.jpg 768w, https://res.cloudinary.com/pablopawpaw/image/upload/w_1024/memoir/IMG_9853.jpg 1024w, https://res.cloudinary.com/pablopawpaw/image/upload/w_1280/memoir/IMG_9853.jpg 1280w, https://res.cloudinary.com/pablopawpaw/image/upload/w_1360/memoir/IMG_9853.jpg 1360w, https://res.cloudinary.com/pablopawpaw/image/upload/w_1440/memoir/IMG_9853.jpg 1440w, https://res.cloudinary.com/pablopawpaw/image/upload/w_1920/memoir/IMG_9853.jpg 1920w" alt="" />
            <Caption text="what is life" />
          </figure>
        </aside>

        <LeftBtn />
        <RightBtn />

        <main className="right">
          <div className="right__wrapper">
            <Title text="the good ol' days" />
            <Desc text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            <hr />

            <section className="right__info">
              <Category text="location" />
              <Detail text="queenstown" />
              <Category text="type" />
              <Detail text="outdoors" />
              <Category text="recommendation" />
              <Detail text="definitely" />
            </section>
          </div>
        </main>

      </div>;
  }
}

export default App;