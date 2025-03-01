import React from 'react';
import Log from '@/components/log';
import { Text, View, FlatList, VirtualizedList, StyleSheet } from 'react-native'; 
import TextButton from '@/components/textButton';

export default function logList(props)
{
    return (
      <View>
        <VirtualizedList style={styles.margin}
            ItemSeparatorComponent={ (({highlighted}) => (<View style={styles.separator}></View>))}
            ListFooterComponent={() => (<Text style={styles.endList}>No more element, you can add it</Text>)}
            initialNumToRender={20}
            data={props.data.get()}
            getItem={(data: any, index:number) => {return data[index]}}
            getItemCount={(data: any) => data.length}
            keyExtractor={item => item.id}
            renderItem={({item, index, separators}) => (
              <TextButton item={item}/>
            )}
        />
      </View>
      )
}

const styles = StyleSheet.create({
  margin: {
    marginVertical: 7
  },
  separator: {
    marginBottom: 7,
  },
  endList: {
    textAlign: "center"
  }

})