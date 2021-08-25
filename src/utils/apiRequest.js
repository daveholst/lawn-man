import axios from 'axios';
import auth from './authUtils';

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://lawn-man-server.holst.club/api'
      : 'http://localhost:3001/api',
});

const request = async ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer ${auth.getToken()}`;

  try {
    const res = await client(options);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const getMe = async () => {
  const res = await request({
    url: '/user/me',
  });
  return res.data;
};
