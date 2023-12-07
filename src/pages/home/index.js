import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ModalPassword } from '../../components/modal';

export function Home() {
  const [pass, setPass] = useState('');
  const [size, setSize] = useState(10);
  const [mondalVisible, setMondalVisible] = useState(false);

  function generatePassword() {
    let pass = '';
    let charset = 'ABCDEFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrstuvxwyz0123456789!@#$%&*()_+';

    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(pass);
    setPass(pass);
    setMondalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} />

      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#FFa91a"
          maximumTrackTintColor="#000"
          thumbTintColor="#FFa91a"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>GERAR SENHA</Text>
      </TouchableOpacity>

      <Modal visible={mondalVisible} animationType='fade' transparent={true} >
        <ModalPassword password={pass} handleClose={() => setMondalVisible(false)} />
      </Modal>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 60,
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  area: {
    width: "80%",
    marginTop: 14,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
  },
  button: {
    width: "80%",
    height: 42,
    backgroundColor: '#FFa91a',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
