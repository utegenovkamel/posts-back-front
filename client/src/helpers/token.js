export const getToken = () => {
  return localStorage.getItem('token');
};

export const setToken = (jwt) => {
  return localStorage.setItem('token', jwt);
};
