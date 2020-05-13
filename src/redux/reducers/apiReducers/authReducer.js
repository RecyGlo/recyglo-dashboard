import { LOGIN, LOG_OUT, REFRESH_TOKEN } from '../../actions/apiActions/ActionTypes';
import history from '../../../shared/utils/history';

const INITIAL_STATE = {
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('jwt', action.payload.token);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
      localStorage.setItem('user', JSON.stringify(action.payload.data));
      history.push('/');
      window.location.reload();
      return { ...state, user: action.payload.data };
    case LOG_OUT:
      localStorage.removeItem('jwt');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      return { ...state, user: null };
    case REFRESH_TOKEN:
      localStorage.setItem('jwt', action.payload.token);
      return { ...state };
    default:
      return state;
  }
};
