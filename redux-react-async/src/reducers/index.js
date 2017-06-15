import {
  REQUEST_TODOS, RECEIVE_TODOS
} from '../actions';

const initialState = {
  isFetching: false,
  items: []
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TODOS:
      return {
        items: [],
        isFetching: true
      }
    case RECEIVE_TODOS:
      return {
        isFetching: false,
        items: action.todos
      }
    default:
      return state
  }
};

export default todos;
