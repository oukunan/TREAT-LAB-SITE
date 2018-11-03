import React, { Component, Fragment } from 'react';
import proceeding from './assets/img/proceeding.png';
import beta from './assets/img/beta.png';
import nextPlan from './assets/img/nextplan.png';
import timeline from './assets/img/timeline.png';
import laptop from './assets/img/laptop.png';
import smile from './assets/img/smile.png';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div id="navbar">
          <div className="navbar-logo">TREATLAB.</div>
          <div className="navbar-item">
            <a href="">About</a>
            <a href="">Download</a>
            <a href="">Contact us</a>
          </div>
        </div>
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
              <a
                href="https://github.com/futurouz/TREAT-LAB/releases/download/v1.3.5/treatlab-setup-1.3.5.exe"
                target="_blank"
              >
                Free Dowload
              </a>
            </div>
          </div>
          <div>
            <img src={proceeding} alt="proceeding" />
          </div>
        </div>
        <div className="content" id="two">
          <div>
            <img src={beta} alt="beta" />
          </div>
          <div>
            <div className="topic">From the problem</div>
            <div className="data">
              <div className="description">
                Nowadays, Computer or laptop has an important role in the
                working process widely. That makes a lot of people are sitting
                in front of your computer or laptop for a long time each day. If
                people work with this equipment for such a long period
                continuously, it might cause many health problems to ensue. The
                cause of sitting work for long duration can cause muscle pain.
                And if any person who need to use computers or laptops to work,
                do not adjust this behavior to work better. It will cause many
                effects and health problems.
              </div>
            </div>
          </div>
        </div>
        <div className="content" id="three">
          <div>
            <div className="topic">Our goal</div>
            <div className="data">
              <div className="description">
                Change behavior and decrease the risk of health’s problem from
                long duration sitting and working with the computer.
              </div>
            </div>
          </div>
          <div>
            <img src={nextPlan} alt="nextPlan" />
          </div>
        </div>
        <div className="content" id="fourth">
          adasd
        </div>
        <div className="content" id="fifth">
          <div>
            <img src={timeline} alt="timeline" />
          </div>
          <div>
            <div className="topic">Privacy and Security</div>
            <div className="data">
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
        </div>
        <div className="content" id="sixth">
          <div>
            <div className="topic">Support platform</div>
            <div className="data">
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
          <div>
            <img src={laptop} alt="laptop" />
          </div>
        </div>
        <div className="content" id="seventh">
          <div>
            <img src={smile} alt="smile" />
            <div className="last_download">
              It takes seconds to download, minutes to get hooked.
            </div>
            <div className="download">
              <a
                href="https://github.com/futurouz/TREAT-LAB/releases/download/v1.3.5/treatlab-setup-1.3.5.exe"
                target="_blank"
              >
                Free Dowload
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
