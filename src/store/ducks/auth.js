const INITIAL_STATE = {
  loading: false,
  data: null,
  currentUser: null,
};

export const Types = {
  SEND_CODE_REQUEST: 'SEND_CODE_REQUEST',
  SEND_CODE_SUCCESS: 'SEND_CODE_SUCCESS',
  SEND_CODE_ERROR: 'SEND_CODE_ERROR',

  VALIDATE_CODE_REQUEST: 'VALIDATE_CODE_REQUEST',
  VALIDATE_CODE_SUCCESS: 'VALIDATE_CODE_SUCCESS',
  VALIDATE_CODE_ERROR: 'VALIDATE_CODE_ERROR',

  GET_AUTH_REQUEST: 'GET_AUTH_REQUEST',
  GET_AUTH_SUCCESS: 'GET_AUTH_SUCCESS',
  GET_AUTH_ERROR: 'GET_AUTH_ERROR',

  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_ERROR: 'LOGOUT_ERROR',

  CREATE_USER_REQUEST: 'CREATE_USER_REQUEST',
  CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
  CREATE_USER_ERROR: 'CREATE_USER_ERROR',
};

export const Actions = {
  sendCode: (data) => ({
    type: Types.SEND_CODE_REQUEST,
    payload: {data},
  }),
  sendCodeSuccess: (data) => ({
    type: Types.SEND_CODE_SUCCESS,
    payload: {data},
  }),
  sendCodeError: () => ({
    type: Types.SEND_CODE_ERROR,
  }),

  validateCode: (data) => ({
    type: Types.VALIDATE_CODE_REQUEST,
    payload: {data},
  }),
  validateCodeSuccess: (data) => ({
    type: Types.VALIDATE_CODE_SUCCESS,
    payload: {data},
  }),
  validateCodeError: () => ({
    type: Types.VALIDATE_CODE_ERROR,
  }),

  getAuth: (data) => ({
    type: Types.GET_AUTH_REQUEST,
    payload: {data},
  }),
  getAuthSuccess: (data) => ({
    type: Types.GET_AUTH_SUCCESS,
    payload: {data},
  }),
  getAuthError: () => ({
    type: Types.GET_AUTH_ERROR,
  }),

  logout: (data) => ({
    type: Types.LOGOUT_REQUEST,
    payload: {data},
  }),
  logoutSuccess: (data) => ({
    type: Types.LOGOUT_SUCCESS,
    payload: {data},
  }),
  logoutError: () => ({
    type: Types.LOGOUT_ERROR,
  }),

  createUser: (data) => ({
    type: Types.CREATE_USER_REQUEST,
    payload: {data},
  }),
  createUserSuccess: (data) => ({
    type: Types.CREATE_USER_SUCCESS,
    payload: {data},
  }),
  createUserError: () => ({
    type: Types.CREATE_USER_ERROR,
  }),
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SEND_CODE_REQUEST:
      return {...state, loading: true};
    case Types.SEND_CODE_SUCCESS:
      return {...state, data: action.payload.data, loading: false};
    case Types.SEND_CODE_ERROR:
      return {...state, loading: false};

    case Types.VALIDATE_CODE_REQUEST:
      return {...state, loading: true};
    case Types.VALIDATE_CODE_SUCCESS:
      return {...state, data: action.payload.data, loading: false};
    case Types.VALIDATE_CODE_ERROR:
      return {...state, loading: false};

    case Types.GET_AUTH_REQUEST:
      return {...state, loading: true};
    case Types.GET_AUTH_SUCCESS:
      return {...state, data: action.payload.data, loading: false};
    case Types.GET_AUTH_ERROR:
      return {...state, loading: false};

    case Types.LOGOUT_REQUEST:
      return {...state, loading: true, data: null};
    case Types.LOGOUT_SUCCESS:
      return {...state, loading: false};
    case Types.LOGOUT_ERROR:
      return {...state, loading: false};

    case Types.CREATE_USER_REQUEST:
      return {...state, loading: true};
    case Types.CREATE_USER_SUCCESS:
      return {...state, data: action.payload.data, loading: false};
    case Types.CREATE_USER_ERROR:
      return {...state, loading: false};
    default:
      return state;
  }
}
