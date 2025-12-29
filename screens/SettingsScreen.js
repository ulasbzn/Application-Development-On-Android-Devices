import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayarlar</Text>
      <Text style={styles.version}>Uygulama Versiyonu: 1.0.0</Text>
      <Text style={styles.info}>Bu uygulama React Navigation kullanılarak geliştirilmiştir.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  version: {
    fontSize: 16,
    color: '#666',
  },
  info: {
    marginTop: 20,
    textAlign: 'center',
    color: '#888',
  },
});