import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';
import { Route } from 'react-router-dom';

import DogsListContainer from './components/DogsListContainer';
import DogBreedImagesContainer from './components/DogBreedImagesContainer';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import GameOneContainer from './components/GameOneContainer';
import GameTwo from './components/GameTwo';
import GameThree from './components/GameThree';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <header className='App-header'>
            <Navbar />
            <div className='sidenav'>
              <UserForm />
            </div>
          </header>

          <main>
            <Route path='/dogslist' component={DogsListContainer} />
            <Route
              path='/dogsbreed/:breed'
              component={DogBreedImagesContainer}
            />
            <Route path='/gameone' component={GameOneContainer} />
            <Route path='/gametwo' component={GameTwo} />
            <Route path='/mixedgame' component={GameThree} />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
