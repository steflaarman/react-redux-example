import React, { Component } from "react";
import PropTypes from "prop-types";

interface LoadingDotsProps {
  // interval: Number;
  // dots: Number;
}

interface LoadingDotsState {
  frame: Number;
}

class LoadingDots extends Component<LoadingDotsProps, LoadingDotsState> {

  // static propTypes = {
  //   interval: PropTypes.number,
  //   dots: PropTypes.number
  // }

  // // static defaultProps = {
  // //   interval: 300,
  // //   dots: 3
  // // }

  interval: any;

  constructor(props, context) {
    super(props, context);

    this.state = { frame: 1 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ frame: +this.state.frame + 1  });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let dots = +this.state.frame % (5 + 1);
    let text = "";
    while (dots > 0) {
      text += ".";
      dots--;
    }
    return <span {...this.props}>{text}&nbsp;</span>;
  }
};

export { LoadingDots };


