export const signInSelector = (state) => state.signIn;

export const signInErrorSelector = (state) => state.signInError;

export const loginSelector = (state) => state.login.data; //agregado para manejar la info del estado

export const loginErrorSelector = (state) => state.loginError;
