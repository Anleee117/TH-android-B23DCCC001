import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Hienthinoidung() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập nội dung..."
        value={text}
        onChangeText={setText}
      />
      <Text style={styles.output}>
        {text ? text : 'Chưa có nội dung'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20 },
  output: { fontSize: 18 }
});
