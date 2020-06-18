import {combineReducers} from "redux";
import myHistory from '../seedData';
import _ from 'lodash';

const downloadFile = async (myData) => {
  const fileName = "file";
  const json = JSON.stringify(myData);
  const blob = new Blob([json],{type:'application/json'});
  const href = await URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = href;
  link.download = fileName + ".json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const categoriesReducer = (state = myHistory, action) => {
    let curr = state.curr;
    const currCategories = state.stack[curr];

    switch (action.type) {
      case 'ADD_REWARD': {
        let { categories, idx, item } = action.payload;
        let newData = _.cloneDeep(currCategories);
        let result = newData[categories].rewards.map((elem, index) => index === idx - 1 ? item : elem);
        newData[categories].rewards = result;
  
        return {
            ...state,
            stack: [...state.stack, newData],
            curr:curr+1
        };
      }
  
      case 'DELETE_REWARD': {
        let { categories, idx } = action.payload;
        let newData = _.cloneDeep(currCategories);
        let result = newData[categories].rewards.map((elem, index) => index == idx ? { id: index, data: ''} : elem);
        newData[categories].rewards = result;
        return {
            ...state,
            stack: [...state.stack,newData],
            curr:curr+1
        };
      }
      
      case 'UNDO':
        return {...state, curr: curr - 1 }
      
      case 'REDO':
        return {...state, curr: curr + 1 }

      case 'SAVE':
        downloadFile(state.stack[curr]);
        return {...state}

      default:
        return state;
    }
};


export default combineReducers({ categoriesReducer });