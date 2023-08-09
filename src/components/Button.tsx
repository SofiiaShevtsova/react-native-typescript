import React, {useCallback} from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

export type ButtonProps = {
  children?: JSX.Element;
  name: string;
  onPress: Function;
  color: string;
  isDisabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  name,
  onPress,
  color,
  isDisabled = false,
}) => {
  const handlerOnPress = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <>
      <Pressable
        onPress={handlerOnPress}
        style={{...styles.button, backgroundColor: color}}
        disabled={isDisabled}>
        {children}
        <Text style={styles.buttonText}>{name}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 160,
    padding: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'rgb(255, 255, 255)',
    fontSize: 15,
  },
});
