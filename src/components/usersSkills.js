import React from 'react';
import searchUser from '../api';

const { useState } = React;

const UsersSkills = () => {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      const data = await searchUser(search);
      setUser(data);
    }
  };

  return (
    <div className="users-main">
      <div className="search">
        <input
          type="text"
          name="search"
          placeholder="Search"
          onChange={onChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="card-skills">
        {user && (
          <div>
            <div className="border-img">
              <img className="image-pro" alt="profile pic" src={user.person.picture} />
            </div>
            <h2 className="user-name">{user.person.name}</h2>
            <h3 className="user-skills-interests"> Skills and interests:</h3>
            <div className="skills-container">
              {user.strengths.map((e) => (
                <div className="skills" key={e.id}>
                  {e.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersSkills;
