/* eslint-disable no-use-before-define */
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { END_POINT_REPORTS, END_POINT_LOGIN, END_POINT_REFRESH_TOKEN } from '../../../shared/utils/endPoints';
import {
  GET_SUCCESS,
  UNAUTHORIZED,
} from '../../../shared/utils/reponseTypes';
import { REPORT_LIST, LOGIN, LOG_OUT, REFRESH_TOKEN } from './ActionTypes';
import history from '../../../shared/utils/history';
import { JWT } from '../../../shared/utils/constants';

export const login = data => (dispatch) => {
  axios({
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    withCredentials: false,
    mode: 'no-cors',
    data,
    url: END_POINT_LOGIN,
  })
    .then((response) => {
      if (response.status === GET_SUCCESS) {
        dispatch({
          type: LOGIN,
          payload: response.data,
        });
      } else if (response.status === UNAUTHORIZED) {
        this.refreshJWTToken();
      } else {
        window.alert('SERVER ERROR FOUND');
      }
    })
    .catch((error) => {
      if (error.message && error.message === 'Request failed with status code 401') {
        window.alert('Incorrect email or password');
      } else {
        window.alert(error);
      }
    });
};

export const logOut = () => (dispatch) => {
  dispatch({
    type: LOG_OUT,
    payload: true,
  });
  history.push('/');
  window.location.reload();
};

export const getReports = () => (dispatch) => {
  axios({
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
      Authorization: sessionStorage.getItem('jwt'),
    },
    withCredentials: false,
    mode: 'no-cors',
    url: END_POINT_REPORTS,
  })
    .then((response) => {
      if (response.status === GET_SUCCESS) {
        dispatch({
          type: REPORT_LIST,
          payload: response.data.data,
        });
        window.location.reload();
      } else {
        window.alert('SERVER ERROR FOUND');
      }
    })
    .catch((error) => {
      window.alert(error);
    });
};

export const refreshJWTToken = () => (dispatch) => {
  const refreshToken = localStorage.getItem('refreshToken');
  axios({
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
      Authorization: sessionStorage.getItem('jwt'),
    },
    withCredentials: false,
    mode: 'no-cors',
    url: END_POINT_REFRESH_TOKEN,
    data: {
      refreshToken,
    },
  })
    .then((response) => {
      if (response.status === GET_SUCCESS) {
        dispatch({
          type: REFRESH_TOKEN,
          payload: response.data.data,
        });
        window.location.reload();
      } else {
        window.alert('SERVER ERROR FOUND');
      }
    })
    .catch((error) => {
      window.alert(error);
    });
};

export const checkJWTExpire = () => {
  const { exp } = jwtDecode(JWT);
  if (exp > new Date().getTime() / 1000) {
    return false;
  }
  return true;
};
