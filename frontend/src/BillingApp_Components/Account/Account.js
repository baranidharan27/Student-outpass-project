import React from 'react';
import "../CardDetails.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card2">
        <div className="header">
          <div className="logo">
            <a href=".">HISTORY</a>
          </div>
         
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>No Recent Transaction Found.</h1>
          </div>
        
        </div>
      
      </div>
    );
  }
}

export default App;