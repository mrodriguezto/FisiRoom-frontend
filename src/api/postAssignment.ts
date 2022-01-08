import axiosInstance from './config';
import { newMaterial } from 'common/types';

export async function postAssignment(id: string, data: newMaterial) {
  const response = await axiosInstance({
    method: 'POST',
    url: `/classroom/${id}/assignments/`,
    data: { title: data.title, description: data.description },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('user-token')}`,
    },
  });
  return response;
}