const INITIAL_STATE = {
    loading: false,
    data: null,
  };
  
  export const Types = {
    CREATE_FRUIT_REQUEST: 'CREATE_FRUIT_REQUEST',
    CREATE_FRUIT_SUCCESS: 'CREATE_FRUIT_SUCCESS',
    CREATE_FRUIT_ERROR: 'CREATE_FRUIT_ERROR',

    SYNC_FRUITS_REQUEST: 'SYNC_FRUITS_REQUEST',
    SYNC_FRUITS_SUCCESS: 'SYNC_FRUITS_SUCCESS',
    SYNC_FRUITS_ERROR: 'SYNC_FRUITS_ERROR'
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

    syncFruits: (data) => ({
        type: Types.SYNC_FRUITS_REQUEST,
        payload: {data},
      }),
      syncFruitsSuccess: (data) => ({
        type: Types.SYNC_FRUITS_SUCCESS,
        payload: {data},
      }),
      syncFruitsError: () => ({
        type: Types.SYNC_FRUITS_ERROR,
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

        case Types.SYNC_FRUITS_REQUEST:
        return {...state, loading: true};
      case Types.SYNC_FRUITS_SUCCESS:
        return {...state, data: action.payload.data, loading: false};
      case Types.SYNC_FRUITS_ERROR:
        return {...state, loading: false};

      default:
        return state;
    }
  }
  