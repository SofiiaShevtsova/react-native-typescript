import React, {useCallback, useState} from 'react';
import {Text, TextInput, StyleSheet, KeyboardTypeOptions} from 'react-native';

export type InputProps = {
  name: string;
  type?: KeyboardTypeOptions;
  placeholder?: string;
  defaultValue: string;
  onChange?: Function;
};

export const Input: React.FC<InputProps> = ({
  name,
  type = 'default',
  placeholder,
  defaultValue,
  onChange,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handlerOnChange = useCallback(
    (text: string) => {
      setValue(text);
      onChange && onChange(text);
    },
    [onChange],
  );
  return (
    <>
      <Text style={styles.text}>{name}</Text>
      <TextInput
        keyboardType={type}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        style={styles.input}
        value={value}
        onChangeText={handlerOnChange}
      />
    </>
  );
};

export const styles = StyleSheet.create({
  input: {
    minWidth: 300,
    marginBottom: 10,
    paddingVertical: 5,
    borderBottomColor: 'rgb(150, 150, 150)',
    borderBottomWidth: 1,
    fontSize: 18,
  },
  text: {
    color: 'rgb(100, 100, 100)',
    fontSize: 15,
    marginBottom: 5,
  },
});
