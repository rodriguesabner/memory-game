import { combineReducers } from '@reduxjs/toolkit'
import commonReducer from "./common.ts";
import {CommonProps} from "../../interfaces/common.ts";

export interface RootState {
    common: CommonProps
}

export default combineReducers({
    common: commonReducer
})
