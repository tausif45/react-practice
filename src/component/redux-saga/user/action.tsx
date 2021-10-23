
import { ActionTypes } from '../action-type';

type user = {
    name:string,
    email ?: string,
    password ?: string,
}

export const postLogin = (user:user) => ({
  type: ActionTypes.POST_LOGIN,
  payload: user 
});

export const postLoginSuccess = (user:user) => ({
  type: ActionTypes.POST_LOGIN_SUCCESS,
  payload: user,
});
export const postLoginError = (message:string) => ({
  type: ActionTypes.POST_LOGIN_ERROR,
  payload: { message },
});


export const postRegister = (user:user) => ({
  type: ActionTypes.POST_REGISTER,
  payload: user 
});
export const postRegisterSuccess = (user:user) => ({
  type: ActionTypes.POST_REGISTER_SUCCESS,
  payload: user,
});
export const postRegisterError = (message:string) => ({
  type: ActionTypes.POST_REGISTER_ERROR,
  payload: { message },
});


export const getUser = () => ({
  type: ActionTypes.GET_USER,
});

export const getUserSuccess = (user:user) => ({
  type: ActionTypes.GET_USER_SUCCESS,
  payload: user,
});

export const getUserError = (message:string) => ({
  type: ActionTypes.GET_USER_ERROR,
  payload: { message },
});
export const postLogout = () => ({
  type: ActionTypes.POST_LOGOUT,
});

export const postLogoutSuccess = () => ({
  type: ActionTypes.POST_LOGOUT_SUCCESS,
});

export const updateUser = (user:user) => ({
  type: ActionTypes.UPDATE_USER,
  payload: user,
});

export const updateUserSuccess = (user:user) => ({
  type: ActionTypes.UPDATE_USER_SUCCESS,
  payload: user,
});

export const updateUserError = (message:string) => ({
  type: ActionTypes.UPDATE_USER_ERROR,
  payload: { message },
});