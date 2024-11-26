import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface CustomButtonProps {
  callback: () => void;
  children: React.ReactNode;
}
const CustomButton: React.FC<CustomButtonProps> = props => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.callback}>
      {props.children}
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
    marginHorizontal: 25,
  },
});
export default CustomButton;
