import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabSection extends Component {
  render() {
    let tab1 = "Main skills",
      tab2 = "Extra",
      tab3 = "Experience",
      tab4 = "Education & Certification";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="#">
                            Web
                            <span> - Development</span>
                          </a>
                          HTML5/CSS3, SASS, Javascript/jQuery, ES7, Express.js,
                          Bootstrap 4, Material-UI, ReactJS, NodeJS, MySQL,
                          Mongo, Firebase, WordPress
                        </li>
                        <li>
                          <a href="#">
                            Design <span> - UI/UX</span>
                          </a>
                          AdobeXD, Photoshop, Figma
                        </li>
                      </ul>
                      {/* <div class="subheading mb-3">
                        Programming Languages & Tools
                      </div> */}
                      {/* <ul class="list-inline dev-icons">
                        <li class="list-inline-item">
                          <i class="fab fa-html5"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fab fa-css3-alt"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fab fa-js-square"></i>
                        </li>

                        <li class="list-inline-item">
                          <i class="fab fa-react"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fab fa-node-js"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fab fa-sass"></i>
                        </li>

                        <li class="list-inline-item">
                          <i class="fab fa-wordpress"></i>
                        </li>

                        <li class="list-inline-item">
                          <i class="fab fa-npm"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fab fa-adobe"></i>
                        </li>
                        <li class="list-inline-item">
                          <i class="fa fa-database"></i>
                        </li>
                      </ul> */}
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          Research Grant - Creativity as Context in the ESL
                          Classroom
                        </li>
                        <li>Thesis Advisor </li>
                        <li>
                          TOESL Presenter - Using Podcasts in the ESL Classroom
                        </li>
                        <li>
                          TOESL Presenter - Creativity as Context in the ESL
                          Classroom
                        </li>
                        <li>Yoga Specialty Certification</li>
                        <li>
                          Multi Subject Teaching Credential - California and
                          Illinois
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="http://needmoremed.com/">
                            Front End Developer
                            <span> - Crown International</span>
                          </a>{" "}
                          Current
                        </li>
                        <li>
                          <a href="https://helloceron.com/">
                            Web and Content Specialist
                            <span> - Hello Ceron</span>
                          </a>{" "}
                          Current
                        </li>
                        {/* <li>
                          <a href="#">
                            Freelance Web Developer<span> - Self-employed</span>
                          </a>{" "}
                          Current
                        </li> */}
                        <li>
                          <a href="#">
                            Adjunct Professor of English
                            <span> - UNIVERSIDAD PANAMERICANA </span>
                          </a>{" "}
                          2014- 2020
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="#">
                            FULL STACK WEB DEVELOPMENT
                            <span> - UC San Diego, San Diego, CA</span>
                          </a>{" "}
                          2020
                        </li>
                        <li>
                          <a href="#">
                            MASTER'S IN EDUCATION
                            <span> - FRAMINGHAM STATE UNIVERSITY</span>
                          </a>{" "}
                          2012-2014
                        </li>
                        <li>
                          <a href="#">
                            BACHELOR'S DEGREE IN EARLY CHILDHOOD EDUCATION
                            <span> - COLUMBIA COLLEGE CHICAGO</span>
                          </a>{" "}
                          2006-2010
                        </li>
                        <li>
                          <a href="#">
                            FRONTEND DEVELOPER CERTIFICATE
                            <span> - SKILLCRUSH</span>
                          </a>{" "}
                          2019-2020
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabSection;
