import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Searchbar from './Searchbar';

const element = <FontAwesomeIcon icon={faBars} />;

const Navbar = () => (
  <nav>
    <div>
      <div>{element}</div>
      <h1>torre</h1>
    </div>
    <div>
      <Searchbar />
      <a href="https://accounts.torre.co/email/?next=/openid/authorize%3Fscope%3Dopenid%2Bprofile%2Bemail%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Ftorre.co%252Fcallback%253Fclient_name%253Dstarrgate%26state%3DtiFota7CPKGnN0AXYXLbCfiBSFSS2CYoP_8KQ4oCWnM%26intent%3Dhome%253Asign-in%26client_id%3D541493">
        SING IN
      </a>
    </div>
  </nav>
);

export default Navbar;
