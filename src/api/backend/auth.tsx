import apiClient from '../apiClient';

export const register = async (data: {
  name: string;
  username: string;
  email: string;
  password: string;
  interests?: string[];
}) => {
  const res = await apiClient.post('/register', data);
  return res.data;
};

export const login = async (data: {
  email: string;
  password: string;
}) => {
  const res = await apiClient.post('/login', data);
  return res.data;
};

export const logout = async () => {
  const res = await apiClient.post('/logout');
  return res.data;
};

export const getProfile = async () => {
  const res = await apiClient.get('/profile');
  return res.data;
};

export const updateProfile = async (data: {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
}) => {
  const res = await apiClient.put('/profile', data);
  return res.data;
};
