import React from 'react';
import Log from '@/components/log';
import { Text, View, VirtualizedList, StyleSheet } from 'react-native'; 
import TextButton from '@/components/textButton';
import IAccountUI from '@/interfaces/IAccountUI';

export default function AccountList({accountList, mode, switchMode, onPress })
{ 
    console.log("mode", mode)
    console.log("onPress", onPress)
    return (
      <View>
        <VirtualizedList
            ItemSeparatorComponent={() => (<View style={styles.separator}></View>)}
            ListFooterComponent={() => (<Text style={styles.endList}>No more element, you can add it</Text>)}
            ListHeaderComponent={() => (<View style={styles.separator}></View>)}
            initialNumToRender={20}
            data={accountList}
            getItem={(data: IAccountUI[], index:number) => data[index]}
            getItemCount={(data: IAccountUI[]) => data.length}
            //keyExtractor={item => item.id}
            renderItem={({item, index, separators}) => (
              <TextButton item={item} switchMode={switchMode} onPress={onPress} mode={mode}/>
            )}
        />
      </View>
      )
}

const styles = StyleSheet.create({
  separator: {
    marginBottom: 7,
  },
  endList: {
    textAlign: "center",
    marginBottom: 100
  }

})