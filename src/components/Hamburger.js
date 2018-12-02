import React, { memo } from 'react';
import '../../css/hamburger.scss';

const Hamburger = memo(({ open, toggle }) => {

  const handleClick = () => {
    toggle();
  }
  
  const topClasses = open ? 'hamburger__top line hamburger__top--animation' : 'hamburger__top line';
  const midClasses = open ? 'hamburger__mid line hamburger__mid--animation' : 'hamburger__mid line';
  const botClasses = open ? 'hamburger__bot line hamburger__bot--animation' : "hamburger__bot line";

  return (
    <div className='hamburger' onClick={handleClick}>
      <span className={topClasses}></span>
      <span className={midClasses}></span>
      <span className={botClasses}></span>
    </div>
  )
})

export default Hamburger;