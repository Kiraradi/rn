import AsyncStorage from '@react-native-async-storage/async-storage';

const setOnboardingStatus = async () => {
  try {
    await AsyncStorage.setItem('onboarding-status', 'true');
    return true;
  } catch (e) {
    console.warn(e);
    return false;
  }
};

const getOnboardingStatus = async () => {
  try {
    const status = await AsyncStorage.getItem('onboarding-status');

    if (!status) {
      return false;
    }

    return !!status;
  } catch (e) {
    console.warn(e);
    return true;
  }
};

export default {
  setOnboardingStatus,
  getOnboardingStatus,
};
