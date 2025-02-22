import LogList from '@/components/logList';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
// import TextButton from '@/components/textButton';
import AddBar from '@/components/AddBar'

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
    {
      id:4,
      gameName: "Todo 4",
      emailOrUsername: "boom",
      date: "01/12/08"
    },
    {
      id:5,
      gameName: "Todo 5",
      emailOrUsername: "monsieur",
      date: "01/12/08"
    },
    {
      id:6,
      gameName: "Todo 6",
      emailOrUsername: "edouard",
      date: "01/12/08"
    },
    {
      id:7,
      gameName: "Todo 7",
      emailOrUsername: "steve",
      date: "01/12/08"
    },
    {
      id:8,
      gameName: "Todo 8",
      emailOrUsername: "elena",
      date: "01/12/08"
    },
    {
      id:9,
      gameName: "Todo 9",
      emailOrUsername: "marie",
      date: "01/12/08"
    },
    {
      id:10,
      gameName: "Todo 10",
      emailOrUsername: "jean",
      date: "01/12/08"
    },
    {
      id:11,
      gameName: "Todo 11",
      emailOrUsername: "gimmick",
      date: "01/12/08"
    },
    {
      id:12,
      gameName: "Todo 12",
      emailOrUsername: "romuald",
      date: "01/12/08"
    },
    {
      id:13,
      gameName: "Todo 13",
      emailOrUsername: "Enrick",
      date: "01/12/08"
    },
    {
      id:14,
      gameName: "Todo 14",
      emailOrUsername: "Gerard",
      date: "01/12/08"
    },
    {
      id:15,
      gameName: "Todo 15",
      emailOrUsername: "Nicolide",
      date: "01/12/08"
    },
  ]
  // return (
  //   <View style={styles.app}>
  //     <SafeAreaView style={styles.app}>
  //       <StatusBar
  //           animated={true}
  //           backgroundColor="#61dafb"
  //           // barStyle={statusBarStyle}
  //           hidden={false}
  //           />
  //       <View style={styles.list}>
  //         <LogList list={list}/>
  //       </View>
  //     </SafeAreaView>
  //     <View style={styles.bottomBar}>
  //       <AddBar/>
  //     </View>
  //   </View>
  // );
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          // barStyle={statusBarStyle}
          hidden={false}
          />
      <View style={styles.list}>
        <LogList list={list}/>
      </View>
      <View style={styles.bottomBar}>
        <AddBar/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flexDirection: "column",
    flex:1
  },
  row: {
    flexDirection: "row",
    flex:1
  },
  list: {
    flex: 0.9,
  },
  bottomBar: {
    flex: 0.1,
  },
  buttonBg: {
    flex: 0.5,
    backgroundColor: "blue"
  },
  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center"
  }
});
