import React, { Component, Fragment } from 'react';
import proceeding from './assets/img/proceeding.png';
import beta from './assets/img/beta.png';
import nextPlan from './assets/img/nextplan.png';
import timeline from './assets/img/timeline.png';
import laptop from './assets/img/laptop.png';
import smile from './assets/img/smile.png';
import vector from './assets/img/Vector.png';
import vector2 from './assets/img/Vector_2.png';
import vector3 from './assets/img/Vector_3.png';
import vector4 from './assets/img/Vector_4.png';
import vector5 from './assets/img/Vector_5.png';
import ellipse from './assets/img/Ellipse.png';
import ellipse3 from './assets/img/Ellipse_3.png';
import ellipse4 from './assets/img/Ellipse_4.png';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div id="navbar">
          <div className="navbar-logo">TREATLAP.</div>
          <div className="navbar-item" />
        </div>
        <div className="content" id="one">
          <div>
            <div className="logo">
              TREATLAP
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
                rel="noopener noreferrer"
              >
                Free Download
              </a>
            </div>
          </div>
          <div>
            <img src={proceeding} alt="proceeding" />
          </div>

          <div className="scroll">
            <div>Scroll down</div>
            <i className="down" />
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
        <div id="fourth">
          <div className="vector-container">
            <div className="ellips">
              <img src={ellipse} alt="ellipse" />
            </div>
            <div className="ellips3">
              <img src={ellipse3} alt="ellipse3" />
            </div>
            <div className="ellips4">
              <img src={ellipse4} alt="ellipse4" />
            </div>
            <div className="vector3">
              <img src={vector3} alt="vector3" />
              <div>
                <div className="vector-topic">Detection Behavior</div>
                <div className="vector-desc">
                  Detection in quatity of keyboard, mouse use, and image
                  processing
                </div>
              </div>
            </div>
            <div className="vector4">
              <img src={vector4} alt="vector4" />
              <div>
                <div className="vector-topic">Analysis</div>
                <div className="vector-desc">
                  Analysis the risk of timing that working on laptop
                </div>
              </div>
            </div>
            <div className="vector5">
              <img src={vector5} alt="vector5" />
              <div>
                <div className="vector-topic">History</div>
                <div className="vector-desc">
                  Present the graph of quantity of working
                </div>
              </div>
            </div>
            <div className="vector2">
              <img src={vector2} alt="vector2" />
              <div>
                <div className="vector-topic">Notification</div>
                <div className="vector-desc">
                  Notification when working for a long time
                </div>
              </div>
            </div>
            <div className="vector">
              <img src={vector} alt="vector" />
              <div>
                <div className="vector-topic">All Features</div>
                <div className="vector-desc">
                  The system will detect your face, sitting position, head
                  bending, count timing when using mouse or touchpad, and when
                  typing the keyboard. Moreover, There is the notification for
                  the user to change your behavior or to relax. And, the system
                  will summary from the data of behavior to present trend of
                  your behavior while working on a computer or laptop. It could
                  protect and decrease the risk of office syndrome or health
                  symptoms that relate to body.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content" id="fifth">
          <div>
            <img src={timeline} alt="timeline" />
          </div>
          <div>
            <div className="topic">Privacy and Security</div>
            <div className="data">
              <div className="description">
                The system will use face detection to know user sitting in front
                of the computer or laptop or not. Moreover, the system will not
                store the data from user typing message, but it will only
                collect count of typing from the keyboard.
              </div>
            </div>
          </div>
        </div>
        <div className="content" id="sixth">
          <div>
            <div className="topic">Support platform</div>
            <div className="data">
              <div className="description">
                The application is only supported Windows10.
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
                rel="noopener noreferrer"
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
