import React from 'react';
import {Text, StyleSheet} from 'react-native';

type ErrorTextProps = {
  text: string;
  isShowed: boolean;
};

export const ErrorText: React.FC<ErrorTextProps> = ({text, isShowed}) => {
  return (
    <>
      <Text
        style={{
          ...styles.textError,
          color: isShowed ? 'rgb(100, 100, 100)' : 'rgb(255, 0, 0)',
        }}>
        {text}
      </Text>
    </>
  );
};

export const styles = StyleSheet.create({
  textError: {
    fontSize: 10,
    color: 'rgb(255, 0, 0)',
    marginBottom: 10,
  },
});
