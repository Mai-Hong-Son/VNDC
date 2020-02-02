import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from 'app/store';
import VNDC from 'app/vndc';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <VNDC />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
