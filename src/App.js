import React, { Component, Fragment } from 'react';
import proceeding from './assets/img/proceeding.png';
class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="content" id="one">
          <div>
            <div className="logo">
              TREATLAB
              <span id="dot">.</span>
            </div>
            <div className="data">
              The System of Behavior and Risk analysis <br />
              of the Computer in Office.
            </div>
            <div className="download">
              <a href="" target="_blank">
                Free Dowload
              </a>
            </div>
          </div>
          <div>
            <img src={proceeding} alt="proceeding" />
          </div>
        </div>
        <div className="content" id="two">
          adasd
        </div>
        <div className="content">adasd</div>
        <div className="content">adasd</div>
        <div className="content">adasd</div>
      </Fragment>
    );
  }
}

export default App;
