import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const { useState } = React;

const searchIcon = <FontAwesomeIcon icon={faSearch} />;

const Searchbar = () => {
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = () => {
    console.log('button');
  };

  return (
    <div>
      <div>
        <input placeholder="Search" onChange={onChange} />
      </div>
      <div>
        <button type="button" onClick={onClick}>
          Search
          {searchIcon}
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
