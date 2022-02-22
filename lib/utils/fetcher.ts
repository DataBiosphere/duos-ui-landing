import axios from 'axios';
import { Method } from '../enum/MethodEnum';

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

export default async function (url: string, method: Method, data?: string) {
  if (method === Method.GET) {
    return await axios.get(url);
  }

  if (method === Method.POST) {
    return await axios.post(url, data);
  }
}
