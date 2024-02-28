import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    telefono: '',
    email: '',
    preguntaSecreta: '',
    respuestaSecreta: '',
    usuario: '',
    contraseña: '',
    confirmarContraseña: ''
  });

  const handleRegister = () => {
    console.log('Registro', formData);
  };

  const handleInputChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Mix-sandwich</Text>
          <Image
            source={require('./assets/img/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.bodyContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => console.log('Go back')}>
            <Text style={styles.backButtonText}>Atrás</Text>
          </TouchableOpacity>
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Regístrate</Text>
            {/* Campos del formulario */}
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              onChangeText={(value) => handleInputChange('nombre', value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Apellido Paterno"
              onChangeText={(value) => handleInputChange('apellidoPaterno', value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Apellido Materno"
              onChangeText={(value) => handleInputChange('apellidoMaterno', value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Teléfono"
              onChangeText={(value) => handleInputChange('telefono', value)}
              keyboardType="phone-pad" // Para asegurarse de que el teclado numérico aparezca para el teléfono
            />
            <TextInput
              style={styles.input}
              placeholder="Correo Electrónico"
              onChangeText={(value) => handleInputChange('email', value)}
              keyboardType="email-address" // Para mejorar la experiencia de ingreso de email
              autoCapitalize="none" // Para prevenir la capitalización automática
            />
            <TextInput
              style={styles.input}
              placeholder="Respuesta a la pregunta secreta"
              onChangeText={(value) => handleInputChange('respuestaSecreta', value)}
              secureTextEntry // Para que la respuesta sea oculta
            />
            <TextInput
              style={styles.input}
              placeholder="Usuario"
              onChangeText={(value) => handleInputChange('usuario', value)}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              onChangeText={(value) => handleInputChange('contraseña', value)}
              secureTextEntry // Para ocultar la entrada de la contraseña
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmar Contraseña"
              onChangeText={(value) => handleInputChange('confirmarContraseña', value)}
              secureTextEntry // Para ocultar la confirmación de la contraseña
            />

            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
              <Text style={styles.registerButtonText}>Registrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Un color de fondo claro que coincide con el esquema de color de la imagen
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffae00',
    padding: 10,
    paddingTop: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  logo: {
    width: 50,
    height: 50,
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFA500',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  formContainer: {
    width: '90%', // Un poco más ancho que antes para utilizar más espacio en pantalla
    alignSelf: 'center', // Asegúrate de que el contenedor esté centrado en la vista
    backgroundColor: '#fff', // Fondo blanco para los campos de entrada
    borderRadius: 10, // Esquinas ligeramente redondeadas para la estética
    paddingVertical: 30, // Espacio vertical dentro del contenedor
    paddingHorizontal: 20, // Espacio horizontal dentro del contenedor
    shadowColor: '#000', // Sombra para dar profundidad
    shadowOpacity: 0.1, // Opacidad de la sombra
    shadowRadius: 10, // Radio de la sombra
    shadowOffset: { width: 0, height: 5 }, // Offset de la sombra
    elevation: 3, // Elevación para Android
  },
  input: {
    width: '100%', // El campo de entrada debería ocupar todo el ancho del formContainer
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 5,
    fontSize: 16, // Tamaño de fuente legible
    color: '#333', // Color de texto oscuro para contraste
    backgroundColor: '#fff', // Fondo blanco para los campos de entrada
  },
  registerButton: {
    backgroundColor: '#228B22',
    paddingVertical: 15, // Espacio vertical adecuado para que el botón sea fácil de tocar
    paddingHorizontal: 30, // Espacio horizontal para el contenido del botón
    borderRadius: 25, // Botones con esquinas redondeadas
    marginTop: 20, // Espacio antes del botón
    width: '100%', // El botón debería ocupar todo el ancho para una apariencia más formal
  },
  registerButtonText: {
    fontSize: 18, // Tamaño de fuente más grande para el botón
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', // Asegúrate de que el texto esté centrado
  },
  formTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFA500',
    paddingVertical: 10,
  },
  bottomBarButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBarButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  menuIcon2: {
    width: 30,
    height: 30,
  },
});


export default RegisterScreen;
