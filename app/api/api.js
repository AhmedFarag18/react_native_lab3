const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = () => {
  return fetch(`${BASE_URL}/users`).then(res => res.json());
};

export const fetchUserById = (id) => {
  return fetch(`${BASE_URL}/users/${id}`).then(res => res.json());
};

export const fetchAlbums = () => {
  return fetch(`${BASE_URL}/albums`).then(res => res.json());
};
