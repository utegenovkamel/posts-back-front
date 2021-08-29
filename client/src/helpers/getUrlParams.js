const getUrlParams = (params = {}) => {
  const upperCaseFirst = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };

  const urlParams = new URLSearchParams();

  for (let key in params) {
    if (params[key] !== null) {
      urlParams.append(upperCaseFirst(key), params[key]);
    }
  }
  return urlParams.toString();
};

export default getUrlParams;
