export const userSelector = (state) => state.user;

export const loginSelector = (state) => state.user.user;

export const signInSelector = (state) => state.user.user;

export const loginErrorSelector = (state) => state.user.loginError;

export const signInErrorSelector = (state) => state.user.signInError;
