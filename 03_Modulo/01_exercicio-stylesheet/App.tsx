import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Item from './src/components/Item';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha jornada no React Native</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.itemGrid}>
          <Item text='Fundamentos do React Native' bgColor='#00ff9f' />
          <Item text='Expo e Expo CLI' bgColor='#00ff9f' />
          <Item text='Estilização com StyleSheet' bgColor='#00ff9f' />
          <Item text='Navegação' bgColor='#f64348' />
          <Item text='ScrollView e FlatList' bgColor='#f64348' />
          <Item text='Periféricos' bgColor='#f64348' />
          <Item text='Styled Components' bgColor='#f64348' />
          <Item text='Temas e Estilos Globais' bgColor='#f64348' />
          <Item text='Consumo de APIs' bgColor='#f64348' />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 80
  },
  title: {
    borderBottomColor: '#121212',
    borderBottomWidth: 1,
    color: '#121212',
    fontSize: 24,
    paddingBottom: 8
  },
  itemGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  scrollContainer: {
    paddingBottom: 30, // Adicionado para dar um espaçamento no final da rolagem
  }
});
