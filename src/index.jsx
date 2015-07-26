import React, { PropTypes } from "react";
import classnames from "classnames";

class Point extends React.Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    cx: PropTypes.number.isRequired,
    cy: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    complete: PropTypes.bool,
    highlight: PropTypes.bool,
    handleHover: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    strokeWidth: 2,
    handleHover: () => {},
    handleClick: () => {}
  }

  constructor(props){
    super(props);
    this.name = "point";
  }

  classes(){
    const { complete, highlight } = this.props;
    const highlightClass = `${this.name}-is-highlight`;
    const completeClass = `${this.name}-is-complete`;
    return classnames({
      [this.name]: true,
      [highlightClass]: highlight,
      [completeClass]: complete
    });
  }

  render() {
    const { cx, cy, strokeWidth, id, handleHover, handleClick } = this.props;
    const pointRadius = strokeWidth * 2;

    return (
      <circle cx={cx}
        cy={cy}
        r={ pointRadius }
        strokeWidth={ strokeWidth }
        onMouseEnter={ handleHover.bind(this, id, true) }
        onMouseLeave={ handleHover.bind(this, id, false) }
        onClick={ handleClick.bind(this, id) }
        className={ this.classes() } />
    );
  }
}

export default Point;
