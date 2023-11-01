import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CommonProps} from "../../interfaces/common.ts";

const initialState: CommonProps = {
    workingHours: null,
    menu: [],
    testimonials: []
}

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setMenuData: (state, action: PayloadAction<any>) => {
            state.menu = action.payload
        },
        setWorkingHoursData: (state, action: PayloadAction<any>) => {
            state.workingHours = action.payload;
        },
        setTestimonialsData: (state, action: PayloadAction<any>) => {
            state.testimonials = action.payload;
        }
    }
})


export const {
    setMenuData,
    setWorkingHoursData,
    setTestimonialsData
} = commonSlice.actions

export default commonSlice.reducer
