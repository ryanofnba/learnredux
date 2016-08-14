var redux = require('redux');

console.log('redux todo example');

const stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

const reducer = (state = stateDefault, action) => {

  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.payload.searchText
      };
    default:
      return state;
  }
};

const store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

console.log('currentState', store.getState());

//subscribe
store.subscribe(() => {
  const state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  payload: {
    searchText: 'Basketball'
  }
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  payload: {
    searchText: 'Dodgeball'
  }
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  payload: {
    searchText: 'Black Pink'
  }
});
