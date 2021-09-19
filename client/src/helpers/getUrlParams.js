const getUrlParams = (params = {}) => {
  const upperCaseFirst = (str) => str[0].toUpperCase() + str.slice(1)

  const urlParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value !== null) {
      urlParams.append(upperCaseFirst(key), value)
    }
  })
  return urlParams.toString()
}

export default getUrlParams
