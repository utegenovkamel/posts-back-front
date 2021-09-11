import React, { useState, useEffect } from 'react';
import { connector } from 'helpers';
import { getUrlParams } from 'helpers';

const defaultOptions = {
  jwt: null,
  deps: [],
  params: {},
};

// use it if you wanna fetch with GET method
const useFetch = (path, options = defaultOptions) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  if (!options.deps) options.deps = [];
  const { deps, params, jwt } = options;

  useEffect(() => {
    if (!path) return;
    const fetchData = async () => {
      setLoading(true);

      const { data } = await connector.get(
        `${path}?${getUrlParams(params)}`,
        jwt,
      );

      if (data) {
        setData(data);
      } else {
        setError(true);
      }

      setLoading(false);
    };

    fetchData();
  }, [...deps]);

  return [data, loading, error];
};

export default useFetch;
