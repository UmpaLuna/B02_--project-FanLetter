import uuid from "react-uuid";
import theme from "../../styledComponents/theme/theme";
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
    payload,
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
    payload,
  };
};

export const removeComment = (payload) => {
  return {
    type: REMOVE_COMMENT,
    payload,
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
  value: {},
  utility: {
    characters: theme.character,
    findDataIndex(state, param) {
      return state.value[param.member].findIndex(
        (target) => target.id === param.id
      );
    },
    filteringMember(state, member, id) {
      return state.value[member].filter((target) => target.id === id);
    },
  },
};

// Reducer

const fanLetterData = (state = initialValue, action) => {
  switch (action.type) {
    // utility
    case SET_INITIAL_VALUE:
      console.log(action.payload);
      return { ...state, value: { ...action.payload } };

    case SET_LOCALSTORAGE_DATA:
      return initialDataSetLocalStorage(state);

    //Edit
    case UPDATE_LIST:
      return updateLists(state, action.payload);

    case EDIT_COMMENT:
      return handleEditComment(state, action.payload);

    case REMOVE_COMMENT:
      return handleRemoveComment(state, action.payload);
    // For DetailPage

    default:
      return state;
  }
};

function handleEditComment(state, payload) {
  const { editText, member, id } = payload;

  const targetIndex = state.utility.findDataIndex(state, { member, id });
  state.value[member][targetIndex].text = editText.current.value;
  updateLocalStorageData(state);
  return { ...state };
}

function handleRemoveComment(state, payload) {
  const targetIndex = state.utility.findDataIndex(state, payload);

  state.value[payload.member].splice(targetIndex, 1);
  console.log(state);
  if (!state.value[payload.member].length) {
    delete state.value[payload.member];
  }
  updateLocalStorageData(state);
  return { ...state };
}

function initialDataSetLocalStorage(state) {
  localStorage.setItem("Tooniverse", JSON.stringify(state.value));
  const getData = localStorage.getItem("Tooniverse");
  const parseData = JSON.parse(getData);
  const newState = { ...state, value: { ...parseData } };
  return newState;
}

function updateLists(state, payload) {
  const letter = {
    id: uuid(),
    name: payload.name.value,
    text: payload.text.value,
    date: new Date().toString(),
    target: payload.target.value,
  };

  state.value[payload.target.value].unshift(letter);

  payload.name.value = "";
  payload.text.value = "";
  return { ...state };
}

function updateLocalStorageData(state) {
  localStorage.setItem("Tooniverse", JSON.stringify(state.value));
}
/**
 * refactoring 할 때 넣자
 * function filteringMember(member, id) {
  return lists[member].filter((target) => target.id === id);
}
 */

export default fanLetterData;
