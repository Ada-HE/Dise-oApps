import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginScreen = () => {
  const [userType, setUserType] = useState('cliente');

  const handleLogin = () => {
    console.log('Login', userType);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Mix-sandwich</Text>
        <Image
          source={require('./assets/img/logo.png')} // Asegúrate de que la ruta sea correcta
          style={styles.logo}
        />
      </View>
      <View style={styles.bodyContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => console.log('Go back')}>
          <Text style={styles.backButtonText}>Atrás</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginTitle}>Iniciar Sesión</Text>
          <Image
            source={require('./assets/img/user.png')} // Asegúrate de que la ruta sea correcta
            style={styles.userIcon}
          />

          <Text style={styles.inputLabel}>Ingrese su Usuario</Text>
          <TextInput style={styles.input} placeholder="Usuario" />
          <Text style={styles.inputLabel}>Ingrese su Contraseña</Text>
          <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
          <Text style={styles.inputLabel}>Seleccione su tipo de usuario</Text>
          <View style={styles.userTypeContainer}>
            <TouchableOpacity
              style={[styles.userTypeButton, userType === 'cliente' && styles.userTypeButtonSelected]}
              onPress={() => setUserType('cliente')}
            >
              <Text style={styles.userTypeButtonText}>Cliente</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.userTypeButton, userType === 'empleado' && styles.userTypeButtonSelected]}
              onPress={() => setUserType('empleado')}
            >
              <Text style={styles.userTypeButtonText}>Empleado</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Acceder</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.registerText}>Regístrate ¿Olvidaste tu contraseña?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda la pantalla.
    alignItems: 'center', // Centra los elementos horizontalmente.
    justifyContent: 'center', // Centra los elementos verticalmente.
  },
  // Estilo para el contenedor del encabezado.
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffae00',
    alignItems: 'center',
    justifyContent: 'center',

  },
  // Estilo para el texto del encabezado.
  headerText: {
    marginTop: 40,
    fontSize: 26, // Tamaño del texto.
    fontWeight: 'bold', // Texto en negrita.
    marginBottom: 20,
    

  }, bodyContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100, // Espacio para el botón de atrás
  },
  backButton: {
    position: 'absolute',
    top: 100, // Coloca el botón arriba del todo
    left: 10, // Coloca el botón a la izquierda del todo
    backgroundColor: '#ffae00', // Fondo amarillo del botón
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
  },
  backButtonText: {
    color: '#fff',
  },
  icon: {
    width: 120,
    height: 120,
    marginVertical: 30,
  },
  logo: {
    position: 'absolute',
    top: 30, // Ajustar según sea necesario
    right: 10, // Ajustar según sea necesario
    width: 50, // Ajustar según sea necesario
    height: 50, // Ajustar según sea necesario
  },
  userIcon: {
    width: 140,
    height: 140,
    marginVertical: 30, // Aumentar el margen vertical para bajar la imagen
  },
  loginContainer: {
    width: '100%',
    alignItems: 'center',
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputLabel: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 5,
  },
  input: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'white',
  }, 
  userTypeContainer: {
    flexDirection: 'row', // Organiza los elementos en fila.
    justifyContent: 'space-around', // Distribuye el espacio uniformemente.
    marginBottom: 20, // Margen inferior.

  },
  userTypeButton: {
    padding: 10, // Espaciado interno.
    borderWidth: 1, // Ancho del borde.
    borderColor: 'gray', // Color del borde.
    borderRadius: 5, // Redondeo de las esquinas.
    margin: 10,
    backgroundColor: '#ffd47f', // Fondo amarillo del botón

  },
  userTypeButtonText: {
    color: 'black', // Color del texto.
  },
  userTypeButtonSelected: {
    backgroundColor: '#ffae00', // Fondo amarillo del botón

  },
  loginButton: {
    backgroundColor: 'black', // Color de fondo.
    padding: 20, // Espaciado interno.
    borderRadius: 8, // Redondeo de las esquinas.
    alignItems: 'center', // Centra el texto horizontalmente.
    marginVertical: 12, // Margen vertical.
  },
  loginButtonText: {
    color: 'white', // Color del texto.
    fontWeight: 'bold', // Texto en negrita.
  },
  footerContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: 'blue',
  },
});

export default LoginScreen;