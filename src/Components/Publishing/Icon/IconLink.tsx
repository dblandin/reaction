import React, { Component } from "react"

export class IconLink extends Component<any, null> {
  static defaultProps = {
    color: "black",
  }

  render() {
    return (
      <svg
        className="IconLink"
        x="0px"
        y="0px"
        viewBox="0 0 15.7 15.7"
        enableBackground="new 0 0 15.7 15.7"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={this.props.color}
          d="M14.7,1c-1.3-1.3-3.7-1.3-5,0L7.1,3.6c-0.7,0.7-1,1.6-1,2.5c-0.9,0-1.8,0.3-2.5,1L1,9.7 c-1.4,1.4-1.4,3.6,0,5c0.7,0.7,1.6,1,2.5,1c0.9,0,1.8-0.4,2.5-1l2.6-2.6c0.7-0.7,1-1.6,1-2.5c0.9,0,1.8-0.4,2.5-1L14.7,6 c0.7-0.7,1-1.6,1-2.5S15.4,1.7,14.7,1z M7.3,10.8l-2.6,2.6C4.1,14,3,14,2.3,13.4c-0.7-0.7-0.7-1.8,0-2.4l2.6-2.6 c0.3-0.3,0.8-0.5,1.2-0.5c0.1,0,0.3,0,0.4,0L5.2,9.2c-0.4,0.4-0.4,0.9,0,1.3c0.2,0.2,0.4,0.3,0.6,0.3c0.2,0,0.5-0.1,0.6-0.3l1.3-1.3 C7.9,9.8,7.8,10.4,7.3,10.8z M13.4,4.7l-2.6,2.6c-0.3,0.3-0.8,0.5-1.2,0.5c-0.1,0-0.3,0-0.4,0l1.1-1.1c0.4-0.4,0.4-0.9,0-1.3 C10,5,9.4,5,9,5.4L8,6.5C7.8,5.9,8,5.3,8.4,4.9L11,2.3c0.3-0.3,0.8-0.5,1.2-0.5c0.5,0,0.9,0.2,1.2,0.5c0.3,0.3,0.5,0.8,0.5,1.2 C13.9,4,13.7,4.4,13.4,4.7z"
        />
      </svg>
    )
  }
}
