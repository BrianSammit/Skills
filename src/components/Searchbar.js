import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import searchUser from '../api';

const { useState } = React;

const searchIcon = <FontAwesomeIcon icon={faSearch} />;

const Searchbar = () => {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async () => {
    const data = await searchUser(search);
    setUser(data);
    console.log(data);
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
      <div>
        {user && (
          <div>
            <img alt="profile pic" src={user.person.picture} />
            <div>
              {user.strengths.map((e) => {
                <div>{e}</div>;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
