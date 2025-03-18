import LogList from '@/components/logList';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
// import TextButton from '@/components/textButton';
import BottomBar from '@/components/BottomBar'
import PlayButton from '@/components/playButton';
import AddButton from '@/components/AddButton';
import DeleteButton from '@/components/DeleteButton';

import React, { useState } from 'react';
import IAccountUI from '@/interfaces/IAccountUI';
import IMain from '@/interfaces/IMain';
import { MMKV } from 'react-native-mmkv';
import IAccount from '@/interfaces/IAccount';
import { IModeSelected } from '@/interfaces/IModeSelected';

type Props = undefined

export default class Main extends React.Component<Props, IMain> {
  private storage = new MMKV();

  constructor(props: Props) {
    super(props)

    const accountList: IAccount[] = JSON.parse(this.storage.getString("data") ?? "[]")
    this.state = {
      accountList: accountList.map(item => ({...item, selected: false})),
      mode: "default",
    }
  }

  setAccountList = (array: IAccountUI[]) =>
  {
    this.setState((prevState) => ({...prevState, accountList: array}))
    this.storage.set("data", JSON.stringify(array))
  }
  setMode = (mode: IModeSelected) => {
    this.setState((prevState) => ({...prevState, mode: mode }))
  }

  switchMode = (id: number) => {
    if (this.state.mode === "default") {
      this.setMode("select")
      this.addSelectedAccount(id)
    }
    else {
      this.setMode("default")
      //this.setAccountList(this.state.accountList.map((item: IAccountUI) => ({...item, selected: false})))
    }
  }
  addSelectedAccount = (id: number) => {
    const account: IAccountUI = this.state.accountList.find((item, index) => id === item.id)!
    account.selected = !account.selected
    this.setState((prevState) => ({...prevState, accountList: this.state.accountList}))
  }

  private mapMode = new Map<IModeSelected, Function>([
    ["default", () => null],
    ["select", this.addSelectedAccount]
  ])

  render() {
    console.log("mode: ", this.state.mode)
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
        flex: 2,
      },
      buttonBg: {
        flex: 0.5,
        backgroundColor: "blue"
      },
      button: {
        width: "100%",
        height: "100%",
        justifyContent: "center"
      },
      deleteButton: {
        backgroundColor: "red",
        borderRadius: "50%",
        padding: 25,
        marginVertical: "auto",
        marginHorizontal: 200,
        flex: 0.9
      }
    })

    return (
      <SafeAreaView style={styles.app}>
        <StatusBar
            animated={true}
            backgroundColor="#61dafb"
            // barStyle={statusBarStyle}
            hidden={false}
            />
        <View style={styles.list}>
          <LogList {...this.state} switchMode={this.switchMode} onPress={this.mapMode.get(this.state.mode)}/>
        </View>
        <BottomBar>
          <PlayButton accountList={this.state.accountList} updateFunction={this.setAccountList}/>
          { this.state.mode === "default" ?
            <AddButton  data={this.state} addFunction={this.setAccountList}/>
            :
            <DeleteButton style={styles.deleteButton}
                    data={this.state}
                    deleteFunction={(array: IAccountUI[]) => {this.setMode("default"); this.setAccountList(array)}}/>
          }
        </BottomBar>
      </SafeAreaView>
    );
  }
};
