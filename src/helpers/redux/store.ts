import { createStore } from 'redux';
import languageReducers from './reducers/language';

const store = createStore(languageReducers);

export default store;