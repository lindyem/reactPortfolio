import React, { Component } from "react";

import './images.scss';

const PortfolioListContent = [
  {
    image: "image-1",
    title: "BIG Mobile Echocardiography WordPress site",
    link: "http://beesimaginggroup.com/",
  },
  {
    image: "image-2",
    title: "CookBook - Fullstack Cookbook App",
    link: "https://still-sierra-23537.herokuapp.com/",
  },
  {
    image: "image-3",
      title: "PlannerApp: Work Day Planner app made with moment.js and jQuery",
    link:"https://lindyem.github.io/workdayplanner/"
  },
  {
    image: "image-4",
      title: "Video World: App using Youtube and Google Maps API",
    link:"https://lindyem.github.io/videoWorld/"
  },
  {
    image: "image-3",
      title: "Burger Devour App: App using Handlebars, MYSQL, and node.js",
    link:"https://morning-ocean-42962.herokuapp.com/"
  },
  //{
  //  image: "image-4",
   // category: "Development",
   // title: "Getting tickets to the big show",
 // },
];

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <h4><a target="_blank" href={value.link}>{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a target="_blank" className="rn-btn" href={value.link}>View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;