import apiClient from '../apiClient';

export const getIdeas = async () => {
  const res = await apiClient.get('/ideas');
  return res.data;
};

export const getIdeaById = async (id: number) => {
  const res = await apiClient.get(`/ideas/${id}`);
  return res.data;
};

export const createIdea = async (data: {
  title: string;
  content: string;
  image_path?: string;
  tags?: string[];
}) => {
  const res = await apiClient.post('/ideas', data);
  return res.data;
};

export const updateIdea = async (id: number, data: {
  title?: string;
  content?: string;
  image_path?: string;
  tags?: string[];
}) => {
  const res = await apiClient.put(`/ideas/${id}`, data);
  return res.data;
};

export const deleteIdea = async (id: number) => {
  const res = await apiClient.delete(`/ideas/${id}`);
  return res.data;
};
