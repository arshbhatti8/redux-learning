import React from 'react';
import {Provider} from 'react-redux';

import Counter from './Components/Counter/index';
import store from './Store/Store';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Counter/>
      </Provider>
    </div>
  );
}

export default App;
