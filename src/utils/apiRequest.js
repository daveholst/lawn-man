import axios from 'axios';
import auth from './authUtils';

const client = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://lawn-man-server-rest.holst.club/api'
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

export const signup = async (newUserData) => {
  const res = await request({
    method: 'post',
    url: '/user/signup',
    data: newUserData,
  });
  return res.data;
};

export const addProperty = async (newPropertyData) => {
  const res = await request({
    method: 'post',
    url: '/user/property',
    data: newPropertyData,
  });
};

export const addZones = async (newZonesData) => {
  const res = await request({
    method: 'post',
    url: '/user/zones',
    data: newZonesData,
  });
};
