import axios from 'axios';

export const server = axios.create({
  baseURL: `localhost:8080`,
  timeout: 1000,
  headers: {
    Authorization: 'Bearer {token}'
  }
});
