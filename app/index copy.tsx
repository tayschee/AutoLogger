import { Button, Text, View, StyleSheet } from 'react-native';

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Button title="Press 2"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
