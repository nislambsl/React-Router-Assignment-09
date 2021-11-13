import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Details = () => {

    const {id} = useParams();
    const [details, setDetails] = useState([]);
    const [specificDetail, setSpecificDetail] = useState({});


useEffect(()=>
    fetch("/fakeData.json")
    .then(res=> res.json())
    .then(data=>setDetails(data))    
 ,[])

useEffect(()=>{
    if (details.length>0){
        const matchedData = details.find(detail=>detail.id === id)
   setSpecificDetail(matchedData);
    }
    }
    ,[details])

    return (
       
        <div>
           <h2> This is Id: {id}</h2>
          
              
            
     </div>
       
    );
};

export default Details;