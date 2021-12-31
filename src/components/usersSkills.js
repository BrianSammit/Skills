import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import searchUser from '../api';

const { useState } = React;

const searchIcon = <FontAwesomeIcon icon={faSearch} />;

const UsersSkills = () => {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async () => {
    const data = await searchUser(search);
    setUser(data);
  };

  return (
    <div className="users-main">
      <div className="search">
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
      <div>
        {user && (
          <div>
            <div className="border-img">
              <img className="image-pro" alt="profile pic" src={user.person.picture} />
            </div>
            <div>{user.strengths.map((e) => e.name)}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersSkills;
