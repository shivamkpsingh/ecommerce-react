import { ADD_USER} from './user.type';
import { Delete_USER} from './user.type';


export const addUser = (user) => {
    return {
      type: ADD_USER,
      payload: user,
    };
  };
export const deleteUse = (user) => {
    return {
      type: Delete_USER,
      payload: user,
    };
  };
  

// export const deleteuser = () => {

//     return {

//        type: DEL_USER,

//     };

// };