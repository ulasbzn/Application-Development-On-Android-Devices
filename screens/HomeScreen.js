import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gezilecek Yerler</Text>
      <Button 
        title="Paris'e Git" 
        onPress={() => navigation.navigate('Details', { place: 'Paris', rating: 5 })} 
      />
      <Button 
        title="Londra'ya Git" 
        onPress={() => navigation.navigate('Details', { place: 'Londra', rating: 4 })} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 20 }
});