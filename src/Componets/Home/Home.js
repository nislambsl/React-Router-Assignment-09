import { useEffect, useState } from 'react';
import HomeContent from '../HomeContent/HomeContent';
import homeStyle from './Home.css';


const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(()=>{
    fetch('./fakeData2.json')
    .then(res=> res.json())
    .then(data=> setServices(data));
    
} ,[])



    return (
        
      <div className="content-container">
         
          <div className="row person-container">
          {
                services.map(service => <HomeContent
                  service={service}>

                </HomeContent>)
                    
               
            }
          </div>

          <div className="card-container">BTN</div>

      </div>
       
    );
};

export default Home;