var redux = require('redux');


const reducer = (state = { name: 'Anonymous' }, action) => {


  return state;
};

const store = redux.createStore(reducer);

const currentState = store.getState();
