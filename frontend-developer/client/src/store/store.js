npm install redux react-redux
// store.js
import { createStore } from 'redux';

// Reducer function
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Create store
const store = createStore(counterReducer);

export default store;
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Counter;
// CounterContext.js
import React, { createContext, useState } from 'react';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { CounterProvider } from './CounterContext';
import App from './App';

ReactDOM.render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.getElementById('root')
);
// Counter.js
import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

const Counter = () => {
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
{
  "checklist": [
    {
      "item": "Install Redux and React-Redux",
      "completed": true
    },
    {
      "item": "Create Redux store and reducer",
      "completed": true
    },
    {
      "item": "Provide the Redux store to the React application",
      "completed": true
    },
    {
      "item": "Connect React component to Redux store",
      "completed": true
    },
    {
      "item": "Create Context and Provider for Context API",
      "completed": true
    },
    {
      "item": "Wrap application with Context Provider",
      "completed": true
    },
    {
      "item": "Use Context in React component",
      "completed": true
    }
  ]
}