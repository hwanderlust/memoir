import React from 'react'
import { cloudPics } from '../constants';
// const fetch = require("node-fetch");
// const picsUrl = "http://localhost:3000/cloudinary/memoir";
export const { Provider, Consumer } = React.createContext();

export class Store extends React.PureComponent {

  state = {
    data: {
      pics: null,
      idx: null
    },
    methods: null,
  }

  componentDidMount() {
    
    this.setState({
      data: {
        pics: cloudPics,
        idx: 0,
      },
      methods: {
        handleNext: this.handleNext, 
        handlePrev: this.handlePrev
      }
    });
  }

  handleNext = () => {

    this.setState(prevState => {
      return {
        ...prevState,
        data: {
          ...prevState.data,
          idx: prevState.data.idx + 1
        }
      }
    }, () => console.log(this.state))
  }

  handlePrev = () => {
    
    this.setState(prevState => {

      if(prevState.data.idx === 0) {

        console.log(`prev idx: 0`);
        console.log(`prevState: `, prevState);
        const lastIdx = this.state.data.pics.length - 1;
        console.log(`lastIdx: `, lastIdx);

        return {
          ...prevState,
          data: {
            ...prevState.data,
            idx: lastIdx
          }
        }
      }

      return {
        ...prevState,
        data: {
          ...prevState.data,
          idx: prevState.data.idx - 1
        }
      }
    })
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}