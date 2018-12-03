import React from 'react';
import Title from "./Title";
import Desc from "./Desc";
import Category from "./Category";
import Detail from "./Detail";

const StoryContainer = () => {
  
  return (
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
  )
}

export default StoryContainer;
