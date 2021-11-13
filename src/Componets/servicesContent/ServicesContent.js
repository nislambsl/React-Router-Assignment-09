import React from 'react';
import CSS from './ServicesContent.css';

const ServicesContent = (props) => {
    console.log(props)
   

    const{name, img} =props.service;
    return (
        <div className="gx-4 col-lg-3 col-md-4 col-sm-6">
            <img className="service-img" src={img} alt="" />
        <h5>Service Name : {name}</h5>
        <button className="btn btn-success">Show Details</button>
        
       
     </div>
    );
};

export default ServicesContent;