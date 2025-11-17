import React, { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function TodoScreen() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!text.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập công việc');
      return;
    }
    setTodos([...todos, text]);
    setText('');
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nhập công việc..."
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <Button title="Thêm việc" onPress={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => removeTodo(index)}>
            <Text style={styles.todoItem}>{item}</Text>
          </TouchableOpacity>
        )}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
  todoItem: { padding: 10, fontSize: 16, borderBottomWidth: 1, borderColor: '#eee' }
});
