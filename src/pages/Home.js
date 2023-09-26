import Banner from '../components/home/banner';
import Card from '../components/Card/Card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Home.scss"



function Home() {

const [gallery, setGallery] = useState ([])
  
useEffect (() => {fetch ("/logements.json")
        
 .then((response) => response.json ())
 .then((data) => { setGallery (data)
 })
 .catch ((error) => console.log (error))
})

  return (
    <div>
      <Banner />
      <div className='gallery-container'>
        {gallery.map((logement, id) =>
          <div key={id} className='gallery-container__card'>
            <Link to={`./LogementsDetails/${logement.id}`}>
            <Card cover={logement.cover} title={logement.title} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
