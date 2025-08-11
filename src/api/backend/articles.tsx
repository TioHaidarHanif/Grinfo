import apiClient from '../apiClient';

export const getArticles = async () => {
  const res = await apiClient.get('/articles');
  return res.data;
};

export const getArticleById = async (id: number) => {
  const res = await apiClient.get(`/articles/${id}`);
  return res.data;
};

export const createArticle = async (data: {
  title: string;
  content: string;
  image_path?: string;
  tags?: string[];
}) => {
  const res = await apiClient.post('/articles', data);
  return res.data;
};

export const updateArticle = async (id: number, data: {
  title?: string;
  content?: string;
  image_path?: string;
  tags?: string[];
}) => {
  const res = await apiClient.put(`/articles/${id}`, data);
  return res.data;
};

export const deleteArticle = async (id: number) => {
  const res = await apiClient.delete(`/articles/${id}`);
  return res.data;
};
