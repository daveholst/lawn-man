import axios from 'axios';
import auth from './authUtils';

const client = axios.create({
  baseURL:
    //! build not honoring the enviro variable and deploying with localhost as baseURL -- not sure why?
    // process.env.NODE_ENV === 'production'
    //   ? 'https://lawn-man-server-rest.holst.club/api'
    //   : 'http://localhost:3001/api',
    'https://lawn-man-server-rest.holst.club/api',
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
  return res.data;
};

export const addZones = async (newZonesData) => {
  const res = await request({
    method: 'post',
    url: '/user/zones',
    data: newZonesData,
  });
  return res.data;
};

export const editZone = async (newZoneData) => {
  const res = await request({
    method: 'put',
    url: '/user/zones',
    data: newZoneData,
  });
  return res.data;
};
