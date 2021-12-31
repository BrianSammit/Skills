const searchUser = async (user) => {
  try {
    const url = `https://bio.torre.co/api/bios/${user}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error');
  }
};

export default searchUser;
