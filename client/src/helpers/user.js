export const getUser = () => {
  return localStorage.getItem('user');
};

export const setUser = (jwt) => {
  return localStorage.setItem('user', jwt);
};
