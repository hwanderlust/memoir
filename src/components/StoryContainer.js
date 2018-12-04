import React, { memo } from 'react';


const StoryContainer = memo(() => {
  
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
})


const Title = ({ text }) => {
  return <h1 className="right__title">{text}</h1>;
};

const Desc = ({ text }) => {
  return <p className="right__desc">{text}</p>;
};

const Category = ({ text }) => {
  return <h3 className="right__category">{text}</h3>;
};

const Detail = ({ text }) => {
  return <p className="right__detail">{text}</p>;
};


export default StoryContainer;