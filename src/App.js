import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './Store/Store'
import Router from './Config/router';
import './App.css';

// https://www.youtube.com/watch?v=rWiYi9v8JFU map integeration video link

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <Router/>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;

