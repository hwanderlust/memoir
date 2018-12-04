import React from 'react';
import { Consumer } from './store';

const withStoreMethods = (WrappedComponent) => {

  return (props) => {

    return (
      <Consumer>
        {ctx => <WrappedComponent {...props} methods={ctx.methods} />}
      </Consumer>
    )
  }
}

export default withStoreMethods;