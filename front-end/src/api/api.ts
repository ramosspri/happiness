import React from 'react';
import axios from 'axios';
import { UsersType } from '../context/UsersContext';

const client = axios.create({
  baseURL: 'http://localhost:3001/users',
});

export async function getUsers() {
  const { data } = await client.get('');
}

export async function deleteUser(id: string) {
  const response = await client.delete(`${id}`);
}

export async function addUser(input: UsersType) {
  const response = await client.post(
    '',
    { input },

    {
      headers: {
        Accept: 'application/json',
      },
    },
  );
}
