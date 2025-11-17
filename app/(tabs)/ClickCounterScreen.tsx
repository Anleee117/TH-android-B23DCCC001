import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ClickCounterScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bạn đã nhấn: {count} lần</Text>
      <Button title="Nhấn tôi" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, marginBottom: 20 }
});
