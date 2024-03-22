import { combineReducers } from "redux";
import dashboardReducer from "../containers/dashboard/reducer";
import loginReducer from "../containers/login/reducer";
import filesReducer from "../containers/RFiles/reducer";
import reportReducer from "../containers/reports/reducer";

export default combineReducers({
  dashboardReducer,
  loginReducer,
  filesReducer,
  reportReducer,
});
