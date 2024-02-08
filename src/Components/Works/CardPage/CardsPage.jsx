// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardsPage.css';

const CardsPage = () => {
  return (
    <div className="Page-card dark:bg-dark bg-lighter">
      <div className="Page-Work-Img">
        <img src="./images/Ram-Ji.jpg" alt="ExpressIT" className="Page-Projects-img"/>
        <img src="./images/Tools/java.png" className="Page-Tools-img" />
      </div>
      <div className="Page-card-content">
        <span className="Page-Project-Name fs-5">ExpressIT</span><br />
        <span className="" style={{fontSize: '13px'}}>Connect With the Universe! Everyone can hear or talk. Deaf and dumb people have difficulties communicating with society.</span>
      </div>
    <div className="Links d-flex flex-row justify-content-start gap-2 mt-2">
  <button className="btn btn-dark border-0 " style={{ backgroundColor: '#091224c4'}}>
    <img src="./images/link.png" style={{ height: '10px', width: '10px' }} alt="Link Icon" className="mx-2"/>
    View
  </button>
  <button className="btn btn-dark opacity-5 border-0 " style={{ backgroundColor: '#091224c4'}}>
  <img src="./images/github-logo.png" style={{ height: '16px', width: '16px' }} alt="Link Icon" className="mx-2"/>
  Code</button>
</div>
    </div>
  );
}

export default CardsPage;