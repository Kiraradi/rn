export type onboardingDataType = {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  image: number;
};
export const onboardingData: onboardingDataType[] = [
  {
    id: 1,
    title: "View events from Ritchie McNeely's and PKWY Tavern locations",
    description:
      "PKWY Tavern and Ritchie McNeely's are more than pubs. We provide places for gathering for wide variety of visitors.",
    buttonText: 'Continue',
    image: require('../../../assets/images/onboarding_1.png'),
  },
  {
    id: 2,
    title: "Rewards from Ritchie McNeely's and PKWY Tavern in one app",
    description:
      " Let's take part in different activities, buy more and you will be rewarded.",
    buttonText: 'Continue',
    image: require('../../../assets/images/onboarding_2.png'),
  },
  {
    id: 3,
    title: 'Track ‘Beer God’ and ‘Century Club’ at the same time',
    description:
      'There is no one on earth cooler than you! Description of both Rewards.',
    buttonText: 'Continue',
    image: require('../../../assets/images/onboarding_3.png'),
  },
];
