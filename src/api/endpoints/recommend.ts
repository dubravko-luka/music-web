import apiClient from '../services/apiClient';

export const getRecommend = async () => {
  const response = await apiClient.request('GET', '/songs-zing');
  if (response.status === 200) {
    const res = response.data ?? [];
    return res
  } else {
    console.log('Error')
  }
};