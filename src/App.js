import React from 'react';
import './App.css';
import SunnyDialog from "./sunnydialog";

class App extends React.Component {
  render() {
    return (
      <div>
       <h1>Home</h1>
       <SunnyDialog> </SunnyDialog>
      </div>
    );
  }
}

export default App;
