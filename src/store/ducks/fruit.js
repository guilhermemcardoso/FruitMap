const INITIAL_STATE = {
  loading: false,
  data: null,
  fruits: [],
  categories: [],
  unsubscribe: null
};

export const Types = {
  CREATE_FRUIT_REQUEST: 'CREATE_FRUIT_REQUEST',
  CREATE_FRUIT_SUCCESS: 'CREATE_FRUIT_SUCCESS',
  CREATE_FRUIT_ERROR: 'CREATE_FRUIT_ERROR',

  GET_FRUITS_REQUEST: 'GET_FRUITS_REQUEST',
  GET_FRUITS_SUCCESS: 'GET_FRUITS_SUCCESS',
  GET_FRUITS_ERROR: 'GET_FRUITS_ERROR',

  GET_CATEGORIES_REQUEST: 'GET_CATEGORIES_REQUEST',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_ERROR: 'GET_CATEGORIES_ERROR',
};

export const Actions = {
  createFruit: (data) => ({
    type: Types.CREATE_FRUIT_REQUEST,
    payload: {data},
  }),
  createFruitSuccess: (data) => ({
    type: Types.CREATE_FRUIT_SUCCESS,
    payload: {data},
  }),
  createFruitError: () => ({
    type: Types.CREATE_FRUIT_ERROR,
  }),

  getFruits: (data) => ({
    type: Types.GET_FRUITS_REQUEST,
    payload: {data},
  }),
  getFruitsSuccess: (data) => ({
    type: Types.GET_FRUITS_SUCCESS,
    payload: {data},
  }),
  getFruitsError: () => ({
    type: Types.GET_FRUITS_ERROR,
  }),

  getCategories: () => ({
    type: Types.GET_CATEGORIES_REQUEST
  }),
  getCategoriesSuccess: (data) => ({
    type: Types.GET_CATEGORIES_SUCCESS,
    payload: {data},
  }),
  getCategoriesError: () => ({
    type: Types.GET_CATEGORIES_ERROR,
  }),
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_FRUIT_REQUEST:
      return {...state, loading: true};
    case Types.CREATE_FRUIT_SUCCESS:
      return {...state, data: action.payload.data, loading: false};
    case Types.CREATE_FRUIT_ERROR:
      return {...state, loading: false};

    case Types.GET_FRUITS_REQUEST:
      return {...state, loading: true};
    case Types.GET_FRUITS_SUCCESS:
      return {...state, fruits: action.payload.data, loading: false};
    case Types.GET_FRUITS_ERROR:
      return {...state, loading: false};

    case Types.GET_CATEGORIES_REQUEST:
      return {...state, loading: true};
    case Types.GET_CATEGORIES_SUCCESS:
      return {...state, categories: action.payload.data, loading: false};
    case Types.GET_CATEGORIES_ERROR:
      return {...state, loading: false};

    default:
      return state;
  }
}
