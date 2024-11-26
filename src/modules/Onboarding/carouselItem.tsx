import React from 'react';
import {
  Dimensions,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface CarouselItemProps {
  title: string;
  image: ImageSourcePropType;
  index: number;
  scrollX: SharedValue<number>;
  description: string;
}
const {width: screenWidth} = Dimensions.get('window');

const CarouselItem: React.FC<CarouselItemProps> = ({
  title,
  image,
  index,
  scrollX,
  description,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const rotation = interpolate(
      scrollX.value,
      [
        (index - 1) * screenWidth,
        index * screenWidth,
        (index + 1) * screenWidth,
      ],
      [-120, 0, 120],
    );

    return {
      transform: [{perspective: 2500}, {rotateY: `${rotation}deg`}],
    };
  });
  return (
    <View style={[styles.item, {width: screenWidth}]}>
      <Text style={styles.title}>{title}</Text>
      <Animated.Image source={image} style={[styles.image, animatedStyle]} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    width: 300,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    paddingHorizontal: 25,
    lineHeight: 25,
  },
  image: {},
});
export default CarouselItem;
