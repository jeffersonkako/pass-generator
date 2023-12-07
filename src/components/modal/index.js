import * as Clipboard from 'expo-clipboard';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function ModalPassword({ password, handleClose }) {

  async function handleCopy() {
    await Clipboard.setStringAsync(password);
    alert('Senha copiada com sucesso!');
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha Gerada</Text>

        <Pressable style={styles.innerPassword} onLongPress={handleCopy}>
          <Text style={styles.text}>{password}</Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={[styles.button, styles.buttonBack]} onPress={handleClose}>
            <Text style={[styles.buttonText, styles.buttonTextBack]}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingTop: 24,
    paddingBottom: 24,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  innerPassword: {
    backgroundColor: '#0e0e0e',
    padding: 14,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  buttonArea: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  button: {
    flex: 1,
    height: 42,
    backgroundColor: '#FFa91a',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  buttonBack: {
    backgroundColor: '#e0e0e0',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonTextBack: {
    color: '#0e0e0e',
    fontWeight: 'normal',

  },
});