import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const searchIcon = <FontAwesomeIcon icon={faSearch} />;

const Searchbar = () => (
  <div>
    <div>
      <input placeholder="Buscar" />
      <div>{searchIcon}</div>
    </div>
  </div>
);

export default Searchbar;
