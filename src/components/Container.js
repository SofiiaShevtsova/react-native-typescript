import React from 'react';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';

export const Container = ({children}) => (
  <View style={styles.container}> {children} </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: '#ffffff',
  },
});
