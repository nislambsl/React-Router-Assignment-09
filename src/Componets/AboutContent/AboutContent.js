import React from 'react';

const AboutContent = (props) => {
    const{name, img,job} =props.member;
    return (
        <div className="gx-4 mt-5 col-lg-3 col-md-3 col-sm-6">
            <img className="member-img" src={img} alt="" />
        <h5>Name : {name}</h5>
        <h6>Job: {job}</h6>
        
        </div>
    );
};

export default AboutContent;