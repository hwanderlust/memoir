import React, { memo } from 'react';


const StoryContainer = memo(({ title, desc, tip, location, worth}) => {
  
  return (
    <main className="right">
      <div className="right__wrapper">
        <Title text={title} />
        <Desc text={desc} />
        <hr />

        <section className="right__info">
          <Category text="location" />
          <Detail text={location} />
          <Category text="tip" />
          <Detail text={tip} />
          <Category text="worth" />
          <Detail text={worth} />
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