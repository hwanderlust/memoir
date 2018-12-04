import React from 'react'
const fetch = require("node-fetch");
const picsUrl = "http://localhost:3000/cloudinary/memoir";
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
      methods: {handleNext: this.handleNext, handlePrev: this.handlePrev}
    });

    this.handleFetch();
  }

  componentDidUpdate() {}

  handleFetch = () => {
    fetch(picsUrl)
      .then(r => r.json())
      .then(r => {
        console.log(r);

        this.setState(prevState => {

          if(prevState.data.pics) {

            const consolidated = [...prevState.data.pics, ...r.resources];
            
            return {
              ...prevState,
              data: {
                ...prevState.data,
                pics: consolidated,
                idx: prevState.data.idx + 1
              }
            }
          }

          return {
            ...prevState,
            data: {
              pics: r.resources,
              idx: 0,
              scrolledToLast: false
            }
          }

        }, () => {

        });
      })
      .catch(err => new Error(err));
  }
  

  handleNext = () => {
    
    if(this.state.data.idx === (this.state.data.pics.length - 1)) {

      this.setState(prevState => {
        return {
          ...prevState,
          data: {
            ...prevState.data,
            scrolledToLast:  true
          }
        }
      });

      this.handleFetch();
      return
    }

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

    if(this.state.idx === 0 && !this.state.scrolledToLast) {
      alert('at the beginning!')
      return
    }
    
    this.setState(prevState => {

      if(prevState.data.idx === 0) {

        const lastIdx = this.state.data.pics.length - 1;

        return {
          idx: lastIdx
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