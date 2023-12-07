import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export function PasswordItem({ data, removePassword }) {
  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      <Text style={styles.textData}>{data}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0e0e',
    borderRadius: 10,
    padding: 14,
    width: '100%',
    marginBottom: 14,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textData: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },

})