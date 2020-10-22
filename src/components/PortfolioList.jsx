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
    repo: "https://github.com/tober65/bolsa",
  },
  {
    image: "image-2",
    title: "Wedding Website: React app - Firebase",
    link: "https://laurenmattwedding.com/",
    repo: "https://github.com/lindyem/laurenmattwedding",
  },
  {
    image: "image-7",
    title:
      "Instagram Clone: React app - Firebase",
    link: "https://instagram-clone-d1536.web.app/",
    repo: "https://github.com/lindyem/instagram-clone-react"
    
  },
  {
    image: "image-8",
    title: "Workout Tracker: Back-end - MongoDB",
    link: "https://thawing-castle-40893.herokuapp.com/",
    repo: "https://github.com/lindyem/workoutTracker"
  },
  {
    image: "image-4",
    title: "Video World: WebApp - Youtube and Google Maps API",
    link: "https://lindyem.github.io/videoWorld/",
    repo: "https://github.com/lindyem/videoWorld"
  },
  {
    image: "image-9",
    title: "Apple Store Clone: React app - SCSS",
    link: "https://apple-store-clone.vercel.app/",
    repo: "https://github.com/lindyem/boalt-apple-store"
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent;
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
                      View Site
                    </a>
                  </div>
                  {value.repo && (
                    <div className="portfolio-button">
                      <a target="_blank" className="rn-btn" href={value.repo}>
                        View Repository
                      </a>
                    </div>
                  )}
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
