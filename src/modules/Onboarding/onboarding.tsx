import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Carousel, {
  ICarouselInstance,
  TAnimationStyle,
} from 'react-native-reanimated-carousel';
import {interpolate, useSharedValue} from 'react-native-reanimated';
import {onboardingData} from './onboardingData';
import {CarouselItem} from './carouselItem';

const {width, height} = Dimensions.get('window');

const Onboarding: React.FC = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const animationStyle: TAnimationStyle = React.useCallback((value: number) => {
    'worklet';

    const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
    const translateX = interpolate(value, [-2, 0, 1], [-width, 0, width]);

    return {
      transform: [{translateX}],
      zIndex,
    };
  }, []);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={styles.wrapper}>
      <Carousel
        ref={ref}
        loop={false}
        style={{width: width, height: height}}
        width={width}
        data={onboardingData}
        onProgressChange={progress}
        renderItem={data => {
          return (
            <CarouselItem
              key={data.index}
              index={data.index}
              animationValue={data.animationValue}
              data={data.item}
              progress={progress}
              array={onboardingData}
              onPressPagination={onPressPagination}
            />
          );
        }}
        customAnimation={animationStyle}
        scrollAnimationDuration={1200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default Onboarding;
