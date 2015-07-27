import React from "react";
import Point from "../src/index.jsx";

class Example extends React.Component {

  constructor(props){
    super(props);
    this.state = { clicked: false, highlighted: false };
    this.handlers = {
      handleHover: this.handleHover.bind(this),
      handleClick: this.handleClick.bind(this)
    };
  }

  handleHover(id, status){
    this.setState({ highlighted: status });
  }

  handleClick(){
    const { clicked } = this.state;
    this.setState({ clicked: !clicked });
  }

  render() {
    const cx = 50;
    const cy = 50;
    const strokeWidth = 20;
    const id = "1";
    const props = { cx, cy, strokeWidth, id };
    const { highlighted, clicked } = this.state;

    return (
      <div>
        <svg width={ 100 } height={ 100 }>
            <Point {...props} {...this.handlers}/>
        </svg>
        <p>Higlighted: { `${highlighted}` }</p>
        <p>Clicked: { `${clicked}` }</p>
      </div>
    );
  }
}

export default Example;
