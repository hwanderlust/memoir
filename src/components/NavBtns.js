import React, { memo } from 'react';
import '../../css/nav-btns.scss';
import withStoreMethods from '../context/withStoreMethods';

const NavBtns = memo(({ methods }) => {
  
  console.log(methods);

  return methods ? (
    <div className='nav-btn__wrapper'>
      <div className='nav-btn__left' onClick={methods.handlePrev}></div>
      <div className="nav-btn__right" onClick={methods.handleNext}></div>
    </div>
  ) : null
})

export default withStoreMethods(NavBtns);