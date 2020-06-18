import {combineReducers} from "redux";
import initialCategories from '../seedData';

const categoriesReducer = (state = initialCategories, action) => {
    switch (action.type) {
      case 'ADD_REWARD': {
        let { categories, idx, item } = action.payload;
        let result = state[categories].rewards.map((elem, index) => index == idx - 1 ? item : elem);
        state[categories].rewards = result;
        return {...state};
      }
      break;
  
      case 'DELETE_REWARD': {
        let { categories, idx, item } = action.payload;
        let result = state[categories].rewards.map((elem, index) => index == idx - 1 ? item : elem);
        state[item] = result;
        return {...state};
      }
        break;
  
      default:
        return state;
    }
  };

export default combineReducers({ categoriesReducer });