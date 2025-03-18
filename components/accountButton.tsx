import React, { useState } from 'react'; 
import { View, Text, StyleSheet, TouchableHighlight, Pressable } from 'react-native';
import Button from '@/components/button';
import {styles} from "@/assets/styles/accountButton.ts"
import { IModeSelected } from '@/interfaces/IModeSelected';
import IAccountUI from '@/interfaces/IAccountUI';

interface Props {
  item: IAccountUI,
  switchMode: Function
  onPress: Function
}

interface State {
  logVisible: boolean,  
}

export default class AccountButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      logVisible: false,
    }
  }

  switchModeSelected = () => this.setState({modeSelected: this.state.modeSelected === "default" ? "select": "default"})

  colorChoice() { 
    return this.props.item.succeed === true ?
    styles.succeedBorder :
    this.props.item.succeed === false ?
    styles.unsucceedBorder :
    styles.noStateBorder 
  }

  render() {
    const defaultStyle = [
      styles.background,
      styles.margin,
      styles.border,
      styles.padding,
      this.props.item.selected === true ? styles.selectedColor : styles.color,
      this.colorChoice(),     
    ]
    const date = new Date(this.props.item.date)
    return (
      <View>
        {
            <Pressable style={defaultStyle} underlayColor={'grey'} onPress={() => this.props.onPress(this.props.item.id)} onLongPress={() => this.props.switchMode(this.props.item.id)}>
              { this.state.logVisible === true ?   
                <View>
                  <Text style={[styles.background, styles.transparency, this.colorChoice(), styles.padding, styles.bottomBorder]}>{this.props.item.game}: {this.props.item.usernameOrEmail}</Text>
                  <Text style={styles.padding}>{Number.isNaN(date.valueOf()) ? "": date.toLocaleTimeString("Fr-fr")} {this.props.item.message}</Text>
                </View>  
                :
                <Text style={styles.padding}>{this.props.item.game}: {this.props.item.usernameOrEmail}</Text>
              }
            </Pressable>
        }
      </View>
    )
  }
}