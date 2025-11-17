import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Hienthinoidung() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hiển thị nội dung</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập nội dung..."
        value={text}
        onChangeText={setText}
      />
      <View style={styles.outputCard}>
        <Text style={styles.output}>
          {text ? text : 'Chưa có nội dung'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  outputCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  output: {
    fontSize: 18,
    color: '#333',
  },
});
