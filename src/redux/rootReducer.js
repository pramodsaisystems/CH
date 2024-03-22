import { combineReducers } from "redux";
import dashboardReducer from "../containers/dashboard/reducer";
import loginReducer from "../containers/login/reducer";

export default combineReducers({
  dashboardReducer,
  loginReducer,
});
