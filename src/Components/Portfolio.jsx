/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio.jpg";

const imageAltText = "A man working on a PC with graphics showing that he is coding.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Traveling Salesman Problem",
    description:
      "Solved traveling salesman problem via near neighbor and greedy approaches.",
  },
  {
    title: "Sentimental Analysis",
    description:
      "Performed sentimental analysis on a pre-existing dataset to evaluate the review of an airline as positive, neutral or negative using naive bayes classifier.",
  },
  {
    title: "Grade Prediction",
    description:
      "Trained a decision tree classifier on self-collected dataset to understand how the sleeping habits, co-curricular participation, family and surroundings affects the grades of a student at undergraduate level.",
  },
  {
    title: "Titanic problem",
    description:
      "Solved the titanic problem and predicted if an individual would surrvive the incident or not using classification.",
  },
  {
    title: "HR Prediction",
    description:
      "Trained ML models to make HR prediction, including random forest, adaboot, xgboot and logistic regression.",
  },
  {
    title: "Price Prediction",
    description:
      "Predicted prices using a regression model trained on a pre-existing dataset.",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
