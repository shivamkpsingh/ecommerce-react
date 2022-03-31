import { ADD_USER } from './user.type';
import { Delete_USER } from './user.type';

const initialState = {
  user: null,
};

 const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    case Delete_USER:
      return {
        ...state,
        // user: action.payload,
        user: null,
      };

    default:
      return state;
  }
};
export default userReducer
