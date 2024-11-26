import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const {width: screenWidth} = Dimensions.get('window');
const PaginationDot: React.FC<{
  index: number;
  scrollX: SharedValue<number>;
}> = ({index, scrollX}) => {
  const animatedDotStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollX.value,
      [
        (index - 1) * screenWidth,
        index * screenWidth,
        (index + 1) * screenWidth,
      ],
      ['#A5D6A7', '#13693B', '#A5D6A7'],
    );

    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View
      key={index.toString()}
      style={[styles.dot, animatedDotStyle]}
    />
  );
};
const Pagination: React.FC<{
  scrollX: SharedValue<number>;
  dataLength: number;
}> = ({scrollX, dataLength}) => {
  return (
    <View style={styles.paginationContainer}>
      {Array.from({length: dataLength}).map((_, index) => (
        <PaginationDot key={index} index={index} scrollX={scrollX} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#333',
    marginHorizontal: 10,
  },
});

export default Pagination;
