export const REQUEST_TODOS = 'REQUEST_TODOS';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

export const requestTodos = () => ({
  type: REQUEST_TODOS
})

export const receiveTodos = (json) => ({
  type: RECEIVE_TODOS,
  todos: json
})

export const fetchTodos = () => dispatch => {
  dispatch(requestTodos())
  return fetch('http://localhost:3000/tasks')
    .then(response => response.json())
    .then(json => dispatch(receiveTodos(json)))
}
