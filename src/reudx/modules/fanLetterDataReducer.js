import { useCallback } from "react";
import uuid from "react-uuid";

// Ducks로 써주장
/**
 * 1. actionValue 나열하시오
 * 2. action 할 함수를 나열 하시오 <= actionCreator
 * 3. initialState를 정의 하시오
 * 4. reducer를 만드시오
 * 5. export default로 reducer 하시고 combineReducers에 넣어주시오
 */

// actionValue
const defaultPreNameActionValue = "fanletterDataReducer/";
// utility
const SET_INITIAL_VALUE = `${defaultPreNameActionValue}SET_INITIAL_VALUE`;
const SET_LOCALSTORAGE_DATA = `${defaultPreNameActionValue}SET_LOCALSTORAGE_DATA`;
const FIND_DATA_INDEX = `${defaultPreNameActionValue}FIND_DATA_INDEX`;

// EDIT
const UPDATE_LIST = `${defaultPreNameActionValue}UPDATE_LIST`;
const EDIT_COMMENT = `${defaultPreNameActionValue}EDIT_COMMENT`;
const REMOVE_COMMENT = `${defaultPreNameActionValue}REMOVE_COMMENT`;

// To show : being used in Detail Page
const FILTER_DATA = `${defaultPreNameActionValue}FILTER_DATA`;

//START - actionCreator

// utilityCreator
export const setInitialData = (payload) => {
  return {
    type: SET_INITIAL_VALUE,
  };
};
export const findingDataIndex = (payload) => {
  return {
    type: FIND_DATA_INDEX,
    payload,
  };
};

export const setLocalStorageData = () => {
  return {
    type: SET_LOCALSTORAGE_DATA,
  };
};

// EditCreator
export const updateList = (payload) => {
  return {
    type: UPDATE_LIST,
    payload,
  };
};

export const editComment = (payload) => {
  return {
    type: EDIT_COMMENT,
    payload: (state) => {
      const { Ref, params } = payload;
      // 아래는 여기서 처리해주면 안될듯..
      //   if (Ref.current.defaultValue === Ref.current.value)
      //     return alert("수정안됨");

      const targetIndex = findDataIndex(state, params);
      state[params.member][targetIndex].text = Ref.current.value;
      return { ...state };
    }, // {object로}받아와야함 {Ref, params}
  };
};

export const removeComment = (payload) => {
  return {
    type: REMOVE_COMMENT,
    payload: (state) => {
      const targetIndex = findDataIndex(state, payload);
      state[payload.member].splice(targetIndex, 1);
      HandleLocalStorageDate(state);
      return { ...state };
    },
  };
};

// to Shown of Deatil Creator : being used in Detail Page
export const filterData = (payload) => {
  return {
    type: FILTER_DATA,
    payload,
  };
};

//END - actionCreator

//initialStateValue
const initialValue = {
  state: {},
};

// Reducer

const fanLetterData = (state = initialValue, action) => {
  switch (action.type) {
    // utility
    case SET_INITIAL_VALUE:
      HandleLocalStorageDate(initialValue);
      break;
    case SET_LOCALSTORAGE_DATA:
      HandleLocalStorageDate(state);
      break;

    //Edit
    case UPDATE_LIST:
      return updateLists(state, action.payload);

    case EDIT_COMMENT:
      return action.payload(state);

    case REMOVE_COMMENT:
      return action.payload(state);
    // For DetailPage

    default:
      return state;
  }
};

function HandleLocalStorageDate(state) {
  localStorage.setItem("Tooniverse", JSON.stringify(state));
}

function updateLists(state, payload) {
  const letter = {
    id: uuid(),
    name: payload.name.value,
    text: payload.text.value,
    date: new Date().toString(),
    target: payload.target.value,
  };

  payload.name.value = "";
  payload.text.value = "";
  HandleLocalStorageDate(state);
  state[payload.target.value].unshift(letter);
  return { ...state };
}

function findDataIndex(state, param) {
  return state[param.member].findIndex((target) => target.id === param.id);
}

export default fanLetterData;
