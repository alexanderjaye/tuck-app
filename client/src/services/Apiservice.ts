import { User, Login } from "./server.interfaces";

const BASE_URL: string = 'http://localhost:3001';

export const login = async (user: Login): Promise<any> => {
  const res = await fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return res.json()
}

export const register = async (user: User): Promise<any> => {
  // REMOVE-START
  const res = await fetch(`${BASE_URL}/users/register`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return res.json()
};
