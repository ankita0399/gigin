import React from 'react';
import AI from './AI';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';
import LoginScreen from './components/LoginScreen';
import JobListScreen from './components/JobListScreen';
import MyJobsScreen from './components/MyJobsScreen';

export const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
        <>
        <AI />
          <LoginScreen/>
          <JobListScreen />
          <MyJobsScreen />
        </>
    </Provider>
  );
};

export default App;
