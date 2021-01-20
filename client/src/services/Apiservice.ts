import { User, Login } from "./server.interfaces";

const BASE_URL: string = 'http://localhost:3002';

export const login = (user: Login): Promise<any> => {
  return fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
}

export const register = (user: User): Promise<any> => {
  // REMOVE-START
  return fetch(`${BASE_URL}/users/register`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
};

export const postRecipe = (user: User): Promise<any> => {
  // REMOVE-START
  return fetch(`${BASE_URL}/users/register`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
};

