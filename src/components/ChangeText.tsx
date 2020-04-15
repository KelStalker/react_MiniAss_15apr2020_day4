import React from "react";

interface IChangeTextProps {}

interface IChangeTextState {
  kelText: string;
  show: boolean;
}

export default class ChangeText extends React.Component<
  IChangeTextProps,
  IChangeTextState
> {
  constructor(props: string) {
    super(props);
    this.state = {
      kelText: "Do NOT click that button!",
      show: false,
    };
    console.log("Constructor ran.");
  }
}

componentDidMount();
{
  return <h1>This is some text</h1>
}
