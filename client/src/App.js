import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './components/routes/AppRouter';
  import configureStore from './components/store/configureStore';
import { addBento } from './components/actions/bento';
import getVisibleBento from './components/selectors/bento';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'normalize.css/normalize.css';
import './styles/styles.css'

const store = configureStore();
store.dispatch(addBento({ name: 'Tempura with Rice', cost: '12.99', cuisine: 'Japanese', ingredients: 'Panko, Tempura Sauce, Shrimp', img: 'https://rasamalaysia.com/wp-content/uploads/2012/08/shrimp-tempura-bento-thumb.jpg' }))
store.dispatch(addBento({ name: 'Lumpia with Rice', cost: '8.99', cuisine: 'Filipino', ingredients: 'Bean Sprouts, Cucumber, Rice', img: 'https://casaveneracion.com/wp-content/uploads/2011/02/tuna-spring-rolls.jpg' }))
store.dispatch(addBento({ name: 'Canneloni', cost: '12.99', cuisine: 'Italian', ingredients: 'Pasta, Mushroom, Sherry, Thyme', img: 'https://www.johnsonville.com/dam/jcr:911e3525-41ba-40ae-b928-1a0d1be2f3c9/baked-cannelloni' }))
store.dispatch(addBento({ name: 'Adobo', cost: '9.99', cuisine: 'Filipino', ingredients: 'Soy Sauce, Vinegar, Peppercorn, Laurel', img: 'https://assets.bonappetit.com/photos/58015073cf8577b803cad5de/master/pass/filipino-chicken-adobo.jpg' }))

const state = store.getState();
const visibleBento = getVisibleBento(state.bento, state.filters);
console.log(visibleBento)

function App() {
  return (
    <div className="App">
    <Provider store={store}> 
      <CssBaseline>
      <AppRouter />
      </CssBaseline>
    </Provider>
    </div>
  );
}

export default App;
