import React from 'react';
import { Consumer } from './store';

const withStoreData = (WrappedComponent) => {
  
  return (props) => {
    
    return (
      <Consumer>
        {ctx => <WrappedComponent {...props} store={ctx.data} />}
      </Consumer>
    )
  }
}

export default withStoreData;