import { View, Text, StyleSheet} from 'react-native';

export function Passwords() {
  return (
    <View>
      <Text>Minhas Senhas</Text>
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
});