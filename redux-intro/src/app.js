import { createStore } from 'redux';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(`Item ${state.length}`);
    default:
      return state;
  }
}

const store = createStore(todosReducer);

const render = () => {
  document.getElementById('root').innerText = store.getState();
}

store.subscribe(render);
render();

document.getElementById('create').addEventListener('click', () => {
  store.dispatch({ type: 'ADD_TODO' })
});
