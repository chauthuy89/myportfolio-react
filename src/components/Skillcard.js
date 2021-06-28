import React from "react";

const Skillcard = ({ skill: { title, about } }) => (
  <div className="col-lg-6">
    <div className="skill-card">
      <div className="skill-card__body">
        <h6 className="skill-card__title">{title}</h6>
        <p className="skill-card__content">{about}</p>
      </div>
    </div>
  </div>
);

export default Skillcard;
