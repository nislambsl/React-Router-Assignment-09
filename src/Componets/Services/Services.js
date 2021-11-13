import React, { useEffect, useState } from 'react';
import ServicesContent from '../servicesContent/ServicesContent';

const Services = () => {

    const [services, setServices] = useState([]);

useEffect(()=>{
    fetch('./fakeData.json')
    .then(res=> res.json())
    .then(data=> setServices(data));
    
} ,[])

  
   
    return (
        <div className="Container fluid">
                       
           <div className="gy-2 row">
           {
                services.map(service => <ServicesContent
                key={service.id}    
                service={service}>

                </ServicesContent>)
            }
           </div>
        </div>
    );
};

export default Services;