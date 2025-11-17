import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

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
      <TextInput
        style={styles.input}
        placeholder="Nhập tên thành phố"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Xem thời tiết" onPress={fetchWeather} />

      {loading && <Text style={styles.loading}>Đang tải…</Text>}

      {weather && (
        <View style={styles.result}>
          <Text>Nhiệt độ hiện tại: {weather.temperature}°C</Text>
          <Text>Tốc độ gió: {weather.windspeed} km/h</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 },
  loading: { marginTop: 10, fontSize: 16 },
  result: { marginTop: 20, fontSize: 16 },
});
