import React, { Component } from "react";
import { FiCast, FiLayers, FiUsers, FiMonitor } from "react-icons/fi";

const ServiceList = [
  //{
  // icon: <FiCast />,
  // title: "Business Stratagy",
  // description:
  //  "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  // },
  {
    icon: <FiLayers />,
    title: "Website Development",
    description:
      "Use of current, up to date tools to create an exceptional user experience. Ability to use HTML/CSS or WordPress to suit customer needs.",
  },
  {
    icon: <FiUsers />,
    title: "Team Player",
    description: "Collaborative and able to work in cross functional teams.",
  },
  {
    icon: <FiMonitor />,
    title: "Thorough Testing ",
    description:
      "Always mobile-first, responsive design cross browser testing & debugging.",
  },
];

class Service extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
              <a href="/service-details">
                <div className="service service__style--2">
                  <div className="icon">{val.icon}</div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default Service;
