import axios from 'axios';
import {  UsersType } from '../context/UsersContext';

const client = axios.create({
  baseURL: 'http://localhost:3000/users',
});

export async function getUsers() {
  const { data } = await client.get('');

  return data;
}

export async function getUser(id: string) {
  const { data } = await client.get(`/${id}`);

  return data;
}

export async function deleteUser(id: string) {
  const response = await client.delete(`${id}`);
}

export async function addUser(user: UsersType) {
  const response = await client.post('', user, {
    headers: {
      Accept: 'application/json',
    },
  });
}

export async function updateUser(id: string, user: UsersType) {
  const response = await client.put(`/${id}`, user, {
    headers: {
      Accept: 'application/json',
    },
  });
}
