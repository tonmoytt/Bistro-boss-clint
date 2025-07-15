 
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 

import img1 from './../../../assets/Home-img/images.jpg'
import img2 from './../../../assets/Home-img/images (1).jpg'
import img3 from './../../../assets/Home-img/download (1).jpg'
import img4 from './../../../assets/Home-img/download.jpg'
import img5 from './../../../assets/Home-img/images (2).jpg'
import img6 from './../../../assets/Home-img/download (2).jpg'

const SWip = () => {
    return (
        <>
            <Carousel>
                <div>
                    <img   src={img1} />
                    
                </div>
                <div>
                    <im src={img2} />
                    
                </div>
                <div>
                    <img  src={img4} />
                   
                </div>
                <div>
                    <img  src={img3} />
                   
                </div>
                <div>
                    <img  src={img5} />
                   
                </div>
                <div>
                    <img  src={img6} />
                   
                </div>
            </Carousel>
        </>
    );
};

export default SWip;

 

