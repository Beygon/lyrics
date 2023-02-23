import React, { Component } from "react";
const Context = React.createContext();

export default class Provider extends Component {
  state = {
    tracklist: [
      {
        track: { trackname: "A track" },
      },
      { track: { trackname: "Track also" } },
    ],
    heading: "Top 10 Tracks",
  };
  render() {
    return <Context.Provider>{this.props.children}</Context.Provider>;
  }
}
export const Consumer = Context.Consumer;
