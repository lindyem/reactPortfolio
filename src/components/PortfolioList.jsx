import React, { Component } from "react";

import "./images.scss";

const PortfolioListContent = [
  {
    image: "image-1",
    title: "BIG Mobile Echocardiography WordPress site",
    link: "http://beesimaginggroup.com/",
  },
  {
    image: "image-6",
    title: "BOL$A: MERN React app",
    link: "https://bolsa-tober65.herokuapp.com/",
  },
  {
    image: "image-2",
    title: "Wedding Website ReactJS - Full Stack",
    link: "https://laurenmattwedding.com/",
  },
  {
    image: "image-7",
    title:
      "React project that uses Firebase services for real-time database storage and authentication",
    link: "https://instagram-clone-d1536.web.app/",
  },
  {
    image: "image-8",
    title: "Workout Tracker - Back-end project using MongoDB",
    link: "https://thawing-castle-40893.herokuapp.com/",
  },
  {
    image: "image-4",
    title: "Video World: App using Youtube and Google Maps API",
    link: "https://lindyem.github.io/videoWorld/",
  },
  {
    image: "image-5",
    title: "Burger Devour App: App using Handlebars, MYSQL, and node.js",
    link: "https://morning-ocean-42962.herokuapp.com/",
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <h4>
                    <a target="_blank" href={value.link}>
                      {value.title}
                    </a>
                  </h4>
                  <div className="portfolio-button">
                    <a target="_blank" className="rn-btn" href={value.link}>
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
