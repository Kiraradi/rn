import {Text} from '@react-navigation/elements';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface CustomButtonProps {
  callback: () => void;
  text: string;
}
const CustomButton: React.FC<CustomButtonProps> = props => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.callback}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#13693B',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
export default CustomButton;
