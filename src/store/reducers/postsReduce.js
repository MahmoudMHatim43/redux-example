import {
  FETCH_POSTS,
  SETUP_POST,
  ADD_POST,
  LOADING_DATA,
  ERR_MESSAGE,
} from "../../actions/types";
const initState = {
  items: [],
  item: { title: "", body: "", id: "" },
  loading: false,
  errMsg: null,
};
function postsReducer(state = initState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return { ...state, loading: action.payload };
    case ERR_MESSAGE:
      return { ...state, errMsg: action.payload };
    case FETCH_POSTS:
      return { ...state, items: action.payload };
    case SETUP_POST:
      return {
        ...state,
        item: { ...state.item, [action.payload.name]: action.payload.value },
      };
    case ADD_POST:
      return {
        ...state,
        items: [...state.items, action.payload],
        item: { ...state.item, title: "", body: "" },
      };
    default:
      return state;
  }
}

export default postsReducer;
