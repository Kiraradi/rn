import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface ISuccesAnimationLogoProps {
  delay: number;
}
const MAX_SIZE_THUMB = 113;
const MAX_SIZE_STAR = 31;
const MAX_SIZE_WHITE_STAR = 16;
export const SuccesAnimationLogo: React.FC<
  ISuccesAnimationLogoProps
> = props => {
  const sizeThumb = useSharedValue<number>(0);
  const sizeStar = useSharedValue<number>(0);
  const sizeWhiteStar = useSharedValue<number>(0);

  const animatedStyles = useAnimatedStyle(() => ({
    width: withSpring(sizeThumb.value),
    height: withSpring(sizeThumb.value),
  }));

  const animatedStylesForStar = useAnimatedStyle(() => ({
    width: withSpring(sizeStar.value),
    height: withSpring(sizeStar.value),
  }));
  const animatedStylesForWhiteStar = useAnimatedStyle(() => ({
    width: withSpring(sizeWhiteStar.value),
    height: withSpring(sizeWhiteStar.value),
  }));

  useEffect(() => {
    setTimeout(() => {
      sizeThumb.value = MAX_SIZE_THUMB;
      sizeStar.value = MAX_SIZE_STAR;
      sizeWhiteStar.value = MAX_SIZE_WHITE_STAR;
    }, props.delay);
  });
  return (
    <View style={styles.wrapper}>
      <Image source={require('../../../assets/images/circle.png')} />
      <Animated.Image
        source={require('../../../assets/images/thumb_up.png')}
        style={[styles.thumb, animatedStyles]}
      />
      <Animated.Image
        source={require('../../../assets/images/Star.png')}
        style={[styles.star, animatedStylesForStar]}
      />
      <Animated.Image
        source={require('../../../assets/images/StarWhite.png')}
        style={[styles.whireStar, animatedStylesForWhiteStar]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 206,
    height: 206,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  thumb: {
    position: 'absolute',
  },
  star: {
    position: 'absolute',
    top: 40,
    left: 55,
  },
  whireStar: {
    position: 'absolute',
    bottom: 35,
    right: 65,
  },
});
