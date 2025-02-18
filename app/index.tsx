import Log from '@/components/log';
import LogList from '@/components/logList';
import { Button, Text, View, StyleSheet, Pressable } from 'react-native';

export default function Main() {
  const list = [ 
    {
      id:1,
      gameName: "Todo 1",
      emailOrUsername: "jinki",
      date: "01/12/05"
    },
    {
      id:2,
      gameName: "Todo 2",
      emailOrUsername: "tomaru",
      date: "01/11/08"
    },
    {
      id:3,
      gameName: "Todo 3",
      emailOrUsername: "link",
      date: "01/12/08"
    },
  ]
  return (
    <View>
      <LogList list={list}/>
      <Pressable style={styles.button}>
        <Text>Run all</Text>
      </Pressable>
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
  button: {

  }
});
