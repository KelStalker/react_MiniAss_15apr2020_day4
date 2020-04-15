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
      kelText: "",
      show: false,
    };
    console.log("Constructor ran.");
  }
}

componentDidMount()
{
  console.log( 'Component Did NOT Mount DAMNIT!')

    this.setState( {
        kelText: ("Do NOT press this button!!"),
        show: this.state.kelText ,

        <button onClick={this.toggleKelText}>

    )};

render ()
{
    console.log( 'render will NOT RUN!!!' );
}
