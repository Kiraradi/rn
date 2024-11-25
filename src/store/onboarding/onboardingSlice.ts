import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OnboardingState} from '../types';

const initialState: OnboardingState = {
  status: false,
};

export const OnboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setOnboardingStatus: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload;
    },
  },
});

export default OnboardingSlice.reducer;
export const {setOnboardingStatus} = OnboardingSlice.actions;
