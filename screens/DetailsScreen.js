import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// route prop'u üzerinden gönderilen verilere erişeceğiz
export default function DetailsScreen({ route, navigation }) {
  // HomeScreen'den gönderilen parametreleri alıyoruz
  const { place, rating } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{place} Detayları</Text>
      <Text style={styles.info}>Puan: {rating} / 5</Text>
      
      {/* Lab 3 - Challenge: Puana göre farklı mesaj gösterimi */}
      {rating >= 5 ? (
        <Text style={styles.topRated}>★ Harika bir seçim! ★</Text>
      ) : (
        <Text style={styles.goodChoice}>Güzel bir yer.</Text>
      )}

      <View style={styles.buttonContainer}>
        <Button 
          title="Geri Dön" 
          onPress={() => navigation.goBack()} 
          color="#666"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 20,
  },
  topRated: {
    fontSize: 16,
    color: 'gold',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  goodChoice: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  }
});