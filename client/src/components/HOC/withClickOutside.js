import React, { Component } from "react";

export default function withClickOutside(WrappedComponent) {
  return class ClickOutsideHoc extends Component {
    state = {
      isOpen: false
    };

    toggle = event => this.setState({ isOpen: !this.state.isOpen });

    constructor(props) {
      super(props);

      this.setWrapperRef = this.setWrapperRef.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
      this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
      //console.log(this.wrapperRef);
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.setState({ isOpen: false });
      }
    }

    render() {
      return (
        <div ref={this.setWrapperRef}>
          <WrappedComponent
            isOpen={this.state.isOpen}
            toggleOpen={this.toggle}
          />
        </div>
      );
    }
  };
}
