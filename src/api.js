export const searchUser = async (user) => {
  try {
    let url = `https://bio.torre.co/api/bios/${user}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
};
