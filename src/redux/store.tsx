import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import UsersReducer from "./reducers/usersReducer";

const store = createStore(UsersReducer, composeWithDevTools());

export default store;
