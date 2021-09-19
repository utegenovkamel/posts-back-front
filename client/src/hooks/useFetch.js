import { useState, useEffect } from 'react'
import { connector, getUrlParams } from 'helpers'

const defaultOptions = {
  jwt: null,
  deps: [],
  params: {},
}

// use it if you wanna fetch with GET method
const useFetch = (path, options = defaultOptions) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const { deps, params, jwt } = options

  useEffect(() => {
    if (!path) return
    const fetchData = async () => {
      setLoading(true)

      const { data: fetchedData } = await connector.get(
        `${path}?${getUrlParams(params)}`,
        jwt
      )

      if (fetchedData) {
        setData(fetchedData)
      } else {
        setError(true)
      }

      setLoading(false)
    }

    fetchData()
  }, [...deps])

  return [data, loading, error]
}

export default useFetch
