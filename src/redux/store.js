import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";
import cartCounter from "./middlewares/cartCounter";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  //   composeWithDevTools(applyMiddleware(logger))
  composeWithDevTools(applyMiddleware(cartCounter,logger,thunk))
);

export default store;
