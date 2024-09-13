import { useEffect } from 'react';
import '../../assets/Css/loader.css'
import initializeParticles from './webUtils/particle';

const Loader = (props) => {

  useEffect(() => {

    initializeParticles();
  }, []);

  return (
    <div className="wrapper" {...props}>
      <div id="particles-background" className="vertical-centered-box"></div>
      <div id="particles-foreground" className="vertical-centered-box"></div>
      <div className="loader"></div>
      <p className="text">Loading Model ({props.children})</p>
    </div>
  );
};

export default Loader;
