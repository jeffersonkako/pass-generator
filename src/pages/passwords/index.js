import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from '../../hooks/useStorage';
import { PasswordItem } from './components/passwordItem';

export function Passwords() {
  const [listPasswords, setListPasswords] = useState([]);
  const isFocused = useIsFocused();
  const { getItem, removeItem } = useStorage();

  useEffect(() => {
    async function loadPasswords() {
      const passwords = await getItem('@pass')
      setListPasswords(passwords);
    }
    loadPasswords();
  }, [isFocused]);

  async function handleDeletPassword(item) {
    const passwords = await removeItem('@pass', item);
    setListPasswords(passwords);
    alert('Senha deletada com sucesso!');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title} >Minhas Senhas</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          style={{ flex: 1, paddingTop: 14, width: '90%' }}
          data={listPasswords}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <PasswordItem data={item} removePassword={() => handleDeletPassword(item)} />
          }
        />
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFa91a',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 58,
    paddingBottom: 14,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});