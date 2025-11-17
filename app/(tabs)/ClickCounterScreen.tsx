import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ClickCounterScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bộ đếm số lần nhấn</Text>
      <View style={styles.counterBox}>
        <Text style={styles.counterText}>{count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>Nhấn tôi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.resetButton]}
        activeOpacity={0.7}
        onPress={() => setCount(0)}
      >
        <Text style={styles.buttonText}>Đặt lại</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 30,
    color: '#333',
  },
  counterBox: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  counterText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 15,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  resetButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
