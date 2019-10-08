import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import DogsListContainer from './components/DogsListContainer'


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <DogsListContainer />
          </header>
        </div>
      </Provider>
    );
  }

}

export default App;
