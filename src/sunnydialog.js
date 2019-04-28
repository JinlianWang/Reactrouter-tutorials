import React from "react";
import Popup from "reactjs-popup";


class SunnyDialog extends React.Component {
  render() {
    return (
	  <Popup trigger={<button> Trigger</button>} position="right center" modal={true} closeOnDocumentClick={false}>
		<div>Popup content here !!</div>
		<form>
			<input placeholder="name" type="name" />
			<input placeholder="name" type="email" />
			<button onClick={this.onSubmit}>Submit</button>
      	</form>
	  </Popup>
    );
  }
}

export default SunnyDialog;