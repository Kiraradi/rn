import React from 'react';
import AsyncStorageUtils from '../utils/AsyncStorageUtils';
import {useAppDispatch} from '../store/hooks/useAppDispatch';
import {setOnboardingStatus} from '../store/onboarding/onboardingSlice';

const useOnboardigStatus = () => {
  const [isAvailable, setIsAvailable] = React.useState(false);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const getOnboardingStatus = async () => {
      const status = await AsyncStorageUtils.getOnboardingStatus();
      setIsAvailable(true);
      dispatch(setOnboardingStatus(status));
    };

    getOnboardingStatus();
  }, [dispatch]);
  return {isAvailable};
};

export default useOnboardigStatus;
