
export const getItem = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const getListItem = <T>(key: string): T | null => {
  const value = localStorage.getItem(key);
  return value ? (JSON.parse(value) as T) : null;
};

export const setItem = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const setListItem = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};

export const userInfo = {
  aptName: getItem('aptName'),
  aptNumber: getItem('aptNumber'),
};

export const isAuth: boolean = getItem('aptName') !== null;
