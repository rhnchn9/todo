import userList from './usersMockDB.json';

export const getUserById = (id: string) => userList.find(user => user.id === id);

export const getUserByEmail = (email: string) => userList.find(user => user.email === email);
