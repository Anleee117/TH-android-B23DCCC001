import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function TodoScreen() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    if (!text.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập công việc');
      return;
    }
    setTodos([...todos, text]);
    setText('');
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách công việc</Text>
      
      {/* Thanh nhập */}
      <TextInput
        placeholder="Nhập công việc..."
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      
      <TouchableOpacity style={styles.addButton} onPress={addTodo}>
        <Text style={styles.addButtonText}>Thêm</Text>
      </TouchableOpacity>

      <FlatList
        data={todos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => removeTodo(index)}
            style={styles.todoItem}
          >
            <Text style={styles.todoText}>{item}</Text>
            <Text style={styles.deleteText}>Xóa</Text>
          </TouchableOpacity>
        )}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
    marginBottom: 15, 
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  todoItem: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  todoText: {
    fontSize: 16,
    color: '#333',
  },
  deleteText: {
    fontSize: 14,
    color: '#FF3B30',
    fontWeight: '600',
  },
});
