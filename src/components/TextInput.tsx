import React, {useCallback, useState} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

type InputProps = {
  name: string;
  placeholder?: string;
  defaultValue: string;
  onChange?: Function;
};

export const Input: React.FC<InputProps> = ({
  name,
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
      <Text
        style={{
          ...styles.text,
          color: value ? 'rgb(100, 100, 100)' : 'rgb(255, 0, 0)',
        }}>
        {name}
      </Text>
      <TextInput
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
    width: '100%',
    marginBottom: 20,
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
