import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const MenuScreen = () => {
  // Datos de ejemplo para los elementos del menú
  const menuItems = [
    {
      name: 'Completo Clásico',
      description: 'El clásico de siempre: jamón, queso, tomate y nuestra salsa especial.',
      image: require('./assets/img/img1.jpg'),
    },
    {
      name: 'Verde Vegano',
      description: 'Frescura verde: variados vegetales orgánicos con hummus casero en pan integral.',
      image: require('./assets/img/img2.jpg'),
    },
    {
      name: 'Delicia de Tres Quesos',
      description: 'Para los amantes del queso: gouda, cheddar y mozzarella derretidos en pan de ajo.',
      image: require('./assets/img/img3.jpg'),
    },
    {
      name: 'Sándwich de Pollo Asado',
      description: 'Jugoso pollo asado con lechuga crujiente y aderezo de mostaza y miel.',
      image: require('./assets/img/img4.jpeg'),
    },
    {
      name: 'Sándwich de Carne y Champiñones',
      description: 'Deléitate con la combinación perfecta de carne de res tierna, champiñones salteados y cebolla caramelizada, todo unido por una suave capa de queso suizo derretido en pan de ciabatta tostado',
      image: require('./assets/img/img2.jpg'),
    },
    {
      name: 'Sándwich Mediterráneo de Pavo',
      description: 'Una opción ligera y refrescante: finas rebanadas de pavo, acompañadas de queso feta, aceitunas Kalamata, tomates secos y hojas de espinaca fresca, aderezado con aceite de oliva y vinagre balsámico en pan pita integral.',
      image: require('./assets/img/img5.jpeg'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Mix-sandwich</Text>
        <View style={styles.spacer} />
        <TouchableOpacity style={styles.menuButton}>
          <Image
            source={require('./assets/img/logo.png')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        
      </View>
      
      <ScrollView style={styles.menuContainer}>
        <View style={styles.oferta}>
           <Text style={styles.menuTitle}>Oferta especial</Text>
           <Text style={styles.menuSubtitle}>¡Para compartir y disfrutar en familia! Este combo incluye dos sándwiches Verdes Veganos, porciones de papas fritas al estilo casero, y una selección de nuestras frescas limonadas artesanales</Text>
        </View>
       
        <View style={styles.itemsContainer}>
          {menuItems.map((item, index) => (
            <View key={index} style={styles.menuItem}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemDetail}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarButton}>
        <Image
            source={require('./assets/img/logo1.png')}
            style={styles.menuIcon2}
          />         
           <Text style={styles.bottomBarButtonText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
        <Image
            source={require('./assets/img/logo2.png')}
            style={styles.menuIcon2}
          />         
           <Text style={styles.bottomBarButtonText}>Menú</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
        <Image
            source={require('./assets/img/user.png')}
            style={styles.menuIcon2}
          />         
           <Text style={styles.bottomBarButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffae00',
    padding: 10,
    paddingTop: 40,
  },
  menuButton: {
    position: 'absolute',
    right: 10, // Mueve el logo a la derecha
    top: 30, // Ajusta según sea necesario para alinear con la barra superior
  },
  spacer: {
    position: 'absolute',
    right: 10,
    width: 30, // El mismo ancho que el logo para balancear el título
  },
  oferta: {
    backgroundColor: '#ffae00',
    padding: 5,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuIcon: {
    width: 50,
    height: 50,
  },
  menuIcon2: {
    width: 30,
    height: 30,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'white',
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    textAlign: 'center',
  },
  menuSubtitle: {
    fontSize: 14,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  menuItem: {
    width: '45%', // Se ajusta para que no se salgan de la pantalla
    margin: '2.5%', // Espaciado uniforme
    borderColor: '#ffae00',
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden', // Para que las imágenes no se salgan del borde redondeado
  },
  itemImage: {
    width: '100%',
    height: 'auto',
    height: undefined, // Elimina el 'height: auto' y utiliza 'aspectRatio'
    aspectRatio: 1, // Mantiene la relación de aspecto cuadrada
    resizeMode: 'cover', // 'cover' asegura que la imagen cubra todo el espacio sin distorsiones  },
  },
  itemDetail: {
    padding: 10,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  itemDescription: {
    fontSize: 14,
    color: 'gray',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffae00',
    paddingVertical: 10,
  },
  bottomBarButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBarButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  // Agrega más estilos según sea necesario...
});

export default MenuScreen;
