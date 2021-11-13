import React from 'react';

import CSS from './ServicesContent.css';
import { useHistory } from 'react-router-dom';

const ServicesContent = (props) => { 

    const{name, img, id} =props.service;

    const history = useHistory();

    const handleDetails =(id)=>{
        
        const uri=`/details/${id}`
        history.push(uri)
    }
    return (
        <div className="gx-4 col-lg-3 col-md-4 col-sm-6">
            <img className="service-img" src={img} alt="" />
        <h5>Service Name : {name}</h5>
        <button onClick={()=>handleDetails(id)} className="btn btn-success">Show Details</button>
        
       
     </div>
    );
};

export default ServicesContent;