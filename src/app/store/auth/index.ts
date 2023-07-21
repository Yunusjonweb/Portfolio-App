import {createSlice} from '@reduxjs/toolkit';
import {AuthState} from './types';

const initialState: AuthState = {
  token: null,
  user: null,
  isRegistered: false,
  loading: false,
  lang: 'uz',
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    handleRegister: (state, {payload: {isRegistered}}) => {
      if (typeof isRegistered !== 'undefined') {
        state.isRegistered = isRegistered;
      }
    },
    handleAuth: (state, {payload: {token, user}}) => {
      state.token = token;
      state.user = user;
    },
    handleLoading: (state, {payload}) => {
      state.loading = payload;
    },
    changeLang: (state, {payload}) => {
      state.lang = payload;
    },
    logOut: () => {
      return initialState;
    },
  },
});

export const {handleRegister, handleAuth, logOut, changeLang, handleLoading} =
  slice.actions;

export default slice.reducer;
