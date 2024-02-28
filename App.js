import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Mix-sandwich</Text>
        <Image source={require('./assets/img/logo.png')} style={styles.logo} />
      </View>

      <ScrollView style={styles.mainContent}>
        <View style={styles.promotionContainer}>
          <Text style={styles.promotionTitle}>Disfruta de el mejor Sandwich</Text>
          <Text style={styles.promotionText}>
            "¿Te gusta probar algo nuevo? Nuestra promoción de sándwiches te lleva en un viaje de sabores únicos. ¡Ven y descúbrelos!"
          </Text>
          <View style={styles.sandwichContainer}>
            <View style={styles.sandwichContainer2}>
              <Image source={require('./assets/img/img1.jpg')} style={styles.sandwichImage} />
            </View>
            <Text style={styles.sandwichDescription}>Extra carne - Un festín visual y culinario para los amantes de la buena comida.</Text>
            <View style={styles.sandwichContainer2}>
              <Image source={require('./assets/img/img2.jpg')} style={styles.sandwichImage} />
            </View>
            <Text style={styles.sandwichDescription}>Extra carne - Lo mejor de lo mejor sandwiches vegetarianos</Text>
          </View>
          <Text style={styles.onlineOffer}>
            Algunas ofertas pueden estar disponibles únicamente en línea
          </Text>
          <Text style={styles.offerText}>
            "Sándwiches que despiertan tus sentidos. Descubre nuestras ofertas especiales y lleva la felicidad a tu paladar."
          </Text>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image source={require('./assets/img/logo1.png')} style={styles.icon} />
          <Text style={styles.bottomBarButtonText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image source={require('./assets/img/logo2.png')} style={styles.icon} />
          <Text style={styles.bottomBarButtonText}>Menú</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Image source={require('./assets/img/user.png')} style={styles.icon} />
          <Text style={styles.bottomBarButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffae00',
    padding: 10,
    paddingTop: 40,
  },
  logo: {
    position: 'absolute',
    top: 30, // Ajustar según sea necesario
    right: 10, // Ajustar según sea necesario
    width: 50, // Ajustar según sea necesario
    height: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  headerTitle: {
    position: 'absolute',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    color: 'white',
  },
  mainContent: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fffae00', // Or any other color you want
  },
  promotionContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  promotionTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000',
    marginBottom: 10,
  },
  promotionText: {
    fontStyle: 'italic',
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  sandwichContainer2: {
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 4,
    borderColor: '#ffae00',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  sandwichImage: {
    width: 250, // Tamaño más grande
    height: 210, // Manteniendo la proporción cuadrada
    resizeMode: 'contain',
    margin: 7,
  },
  sandwichDescription: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  onlineOffer: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#c00',
    marginBottom: 5,
  },
  offerText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffae00',
    paddingVertical: 10,
  },
  bottomBarButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  bottomBarButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
