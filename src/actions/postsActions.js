import {
  FETCH_POSTS,
  ADD_POST,
  SETUP_POST,
  LOADING_DATA,
  ERR_MESSAGE,
} from "./types";
export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_DATA, payload: true });
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    dispatch({ type: FETCH_POSTS, payload: data });
    dispatch({ type: LOADING_DATA, payload: false });
  } catch (err) {
    dispatch({ type: ERR_MESSAGE, payload: err.message });
    console.log(err.message);
    dispatch({ type: LOADING_DATA, payload: false });
  }
};
export const handleChange = (e) => (dispatch) => {
  const name = e.target.name;
  const value = e.target.value;
  dispatch({ type: SETUP_POST, payload: { name, value } });
};

export const handleSubmit = (e, data) => (dispatch) => {
  e.preventDefault();
  try {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    dispatch({ type: ADD_POST, payload: data });
  } catch (err) {
    console.log(err);
  }
};
