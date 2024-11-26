import React, {useRef} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  FlatList,
  Pressable,
  Text,
} from 'react-native';
import {onboardingData} from './onboardingData';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import CarouselItem from './carouselItem';
import Pagination from './Pagination';
import CustomButton from '../CustomButton/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch} from '../../store/hooks/useAppDispatch';
import {setOnboardingStatus} from '../../store/onboarding/onboardingSlice';

const {width: screenWidth} = Dimensions.get('window');

const Onboarding: React.FC = () => {
  const dispatch = useAppDispatch();
  const scrollX = useSharedValue(0);
  const flatListRef = useRef<FlatList>(null);
  const isLastSlide = useSharedValue(false);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const checkLastSlide = useAnimatedStyle(() => {
    const lastSlide =
      Math.floor(scrollX.value / screenWidth) === onboardingData.length - 1;
    isLastSlide.value = lastSlide;
    return {};
  });

  const skipButtonStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollX.value,
      [
        screenWidth * (onboardingData.length - 2),
        screenWidth * (onboardingData.length - 1),
      ],
      [1, 0],
    );

    return {
      opacity,
    };
  });

  const continueButtonStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollX.value,
      [
        screenWidth * (onboardingData.length - 2),
        screenWidth * (onboardingData.length - 1),
      ],
      [0, 1],
    );

    return {
      opacity,
    };
  });

  const finishOnboarding = async () => {
    await AsyncStorage.setItem('onboarding-status', 'true');
    dispatch(setOnboardingStatus(true));
  };

  const onButtonPress = () => {
    if (isLastSlide.value) {
      finishOnboarding();
    } else {
      goToNextSlide();
    }
  };

  const goToNextSlide = () => {
    const nextIndex = Math.min(
      onboardingData.length - 1,
      Math.floor(scrollX.value / screenWidth) + 1,
    );
    flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.listContainer}>
        <Animated.FlatList
          ref={flatListRef}
          data={onboardingData}
          renderItem={({item, index}) => {
            return (
              <CarouselItem
                title={item.title}
                image={item.image}
                index={index}
                scrollX={scrollX}
                description={item.description}
              />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={item => item.id.toString()}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          snapToInterval={screenWidth}
          decelerationRate="fast"
        />
      </View>

      <Animated.View style={[styles.buttonSkipContainer, skipButtonStyle]}>
        <Pressable onPress={finishOnboarding}>
          <Text style={styles.buttonSkipText}>Skip</Text>
        </Pressable>
      </Animated.View>

      <Pagination dataLength={onboardingData.length} scrollX={scrollX} />
      <Animated.View style={checkLastSlide}>
        <CustomButton callback={onButtonPress}>
          <Animated.Text style={[styles.textCustomButton, skipButtonStyle]}>
            Next
          </Animated.Text>
          <Animated.Text style={[styles.textCustomButton, continueButtonStyle]}>
            Continue
          </Animated.Text>
        </CustomButton>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: '#f0f5ef',
    flexDirection: 'column',
    gap: 30,
    position: 'relative',
  },

  listContainer: {
    height: '75%',
  },

  buttonSkipContainer: {
    position: 'absolute',
    top: 60,
    right: 40,
  },
  buttonSkipText: {
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#13693B',
  },
  textCustomButton: {
    position: 'absolute',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Onboarding;
