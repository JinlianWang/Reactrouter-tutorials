import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(event) {
    this.props.history.push("/");
  };

  render() {
    return (
      <form>
        <input placeholder="name" type="name" />
        <input placeholder="name" type="email" />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}

export default Contact;
