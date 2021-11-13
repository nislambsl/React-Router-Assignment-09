import React, { useEffect, useState } from 'react';
import AboutContent from '../AboutContent/AboutContent';

const About = () => {

    const [members, setMembers] = useState([]);

    useEffect(()=>{
      fetch('./fakeData3.json')
      .then(res=> res.json())
      .then(data=> setMembers(data));
      
  } ,[])
  
    return (
        <div className="container text-center">
            <h2>Team - Online Learning Academy</h2>
            <h6>We started with one mission: Make Learning fun. Since then,</h6>
            <h6>all five and a half caffeine sucking night owls are having fun. </h6>
            
            <div>
         
            <div className="Container fluid">
            <div className="gy-2 row">
         {
               members.map(member => <AboutContent
               member={member}></AboutContent>  
               )
                   
              
           }
         </div>

        

     </div>
     </div>

        </div>
    );
};

export default About;