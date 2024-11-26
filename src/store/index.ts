import {configureStore} from '@reduxjs/toolkit';
import OnboardingReduser from './onboarding/onboardingSlice';
import UserReduser from './user/UserSlice';
export const makeStore = configureStore({
  reducer: {
    onboarding: OnboardingReduser,
    user: UserReduser,
  },
});

export type AppDispatch = typeof makeStore.dispatch;
export type AppState = ReturnType<typeof makeStore.getState>;
