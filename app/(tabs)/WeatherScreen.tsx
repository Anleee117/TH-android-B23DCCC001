import React, { useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Weather = {
  temperature: number;
  windspeed: number;
};

export default function WeatherScreen() {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState<Weather | null>(null);

  const fetchWeather = async () => {
    if (!city.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập tên thành phố');
      return;
    }

    setLoading(true);
    setWeather(null);

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        Alert.alert('Lỗi', 'Không tìm thấy thành phố');
        return;
      }

      const { latitude, longitude } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      setWeather(weatherData.current_weather);
    } catch (error) {
      console.error(error);
      Alert.alert('Lỗi', 'Không lấy được dữ liệu thời tiết');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tra cứu thời tiết</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên thành phố"
        value={city}
        onChangeText={setCity}
      />
      <TouchableOpacity style={styles.button} onPress={fetchWeather}>
        <Text style={styles.buttonText}>Xem thời tiết</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 20 }} />}

      {weather && (
        <View style={styles.resultCard}>
          <Text style={styles.resultText}>Nhiệt độ hiện tại: {weather.temperature}°C</Text>
          <Text style={styles.resultText}>Tốc độ gió: {weather.windspeed} km/h</Text>
        </View>
      )}
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
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  resultCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
});
