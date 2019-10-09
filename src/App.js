import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import { Route } from 'react-router-dom'

import DogsListContainer from './components/DogsListContainer'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'
import Navbar from './components/Navbar'
import UserForm from './components/UserForm'


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>

          <div className="sidenav">
            <UserForm />
          </div>

          <main>
            <Route path="/dogslist" component={DogsListContainer} />
            <Route path="/dogsbreed/:breed" component={DogBreedImagesContainer} />
          </main>
        </div>
      </Provider>
    );
  }

}

export default App;
