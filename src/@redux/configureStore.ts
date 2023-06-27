import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import user from "./user/reducers";

const configureStore = (initialState = {}) => {
  const reducers = combineReducers({
    user,
  });

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware())
  );

  return { store };
};

export default configureStore;
