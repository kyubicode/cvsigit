const TOKEN_KEY = 'cv_token';
const VALID_TOKEN = import.meta.env.VITE_CV_TOKEN as string;

export const login = (token: string): boolean => {
if (token === VALID_TOKEN) {
localStorage.setItem(TOKEN_KEY, token);
return true;
}
return false;
};


export const logout = () => {
localStorage.removeItem(TOKEN_KEY);
};


export const isAuthenticated = (): boolean => {
return localStorage.getItem(TOKEN_KEY) === VALID_TOKEN;
};
