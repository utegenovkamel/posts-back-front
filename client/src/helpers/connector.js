import { getUser } from 'helpers/user';

const connector = {
  get: async (path, jwt = null) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_ENDPOINT}/${path}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${getUser() || jwt}`,
          },
        },
      );

      return {
        data: response.ok && (await response.json()),
        status: response.status,
      };
    } catch {
      return {
        data: false,
        status: 500,
      };
    }
  },
  post: async (path, payload, jwt = null) => {
    try {
      const data = JSON.stringify(payload);

      const response = await fetch(
        `${process.env.REACT_APP_ENDPOINT}/${path}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getUser() || jwt}`,
          },
          body: data,
        },
      );
      if (response.status === 409 || response.status === 400) {
        return {
          data: await response.json().catch((error) => null),
          status: response.status,
        };
      }

      if (response.status === 204) {
        return {
          ok: response.ok,
          status: response.status,
        };
      }

      return {
        ok: response.ok,
        data: (response.status === 200 || 201) && (await response.json()),
        status: response.status,
      };
    } catch {
      return {
        data: false,
        status: 500,
      };
    }
  },
  patch: async (path, payload, jwt = null) => {
    try {
      const data = JSON.stringify(payload);

      const response = await fetch(
        `${process.env.REACT_APP_ENDPOINT}/${path}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getUser() || jwt}`,
          },
          body: data,
        },
      );

      if (response.status === 409) {
        return {
          data: false,
          status: response.status,
        };
      }

      if (response.status === 400) {
        return {
          data: false,
          status: response.status,
        };
      }

      return {
        ok: response.ok,
        data: response.status === 422 && (await response.json()),
        status: response.status,
      };
    } catch {
      return {
        data: false,
        status: 500,
      };
    }
  },
  delete: async (path, jwt = null) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_ENDPOINT}/${path}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${getUser() || jwt}`,
          },
        },
      );

      return {
        ok: response.ok,
        status: response.status,
      };
    } catch {
      return {
        data: false,
        status: 500,
      };
    }
  },
  download: async (path) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_ENDPOINT}/${path}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${getUser()}`,
          },
        },
      );

      const disposition = response.headers.get('Content-Disposition');
      const match = disposition.match(/filename=([a-zA-Z0-9_ ]*.[\w]{2,4})/);
      const filename = match && match[1];

      return {
        blob: await response.blob(),
        name: filename,
      };
    } catch {
      return {
        data: false,
        status: 500,
      };
    }
  },
};

export default connector;
