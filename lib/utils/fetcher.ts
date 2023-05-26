import axios from 'axios';

const updateOptions = () => {
  if (typeof window === 'undefined') return {};

  if (!window.localStorage.user) return {};

  if (Object.keys(window.localStorage.user).length === 0) return {};

  const user = JSON.parse(window.localStorage.user);

  if (!!user.token) {
    return {
      headers: {
        Authorization: `Token ${user.token}`,
      },
    };
  }
};

export default async function (url: string, method: string, data?: any) {
  if (method === "GET") {
    return await axios.get(url);
  }

  if (method === "POST") {
    return await axios.post(url, data);
  }
}
