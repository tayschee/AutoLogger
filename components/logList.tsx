import React from 'react';
import Log from '@/components/log';
import { Text, View, FlatList, StyleSheet } from 'react-native'; 

export default function logList(props)
{
    return (
        <View>
            <FlatList style={styles.margin} ItemSeparatorComponent={ (({highlighted}) => (<View style={styles.separator}></View>))}
                data={props.list}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item, index, separators}) => (
                    <Log  id={item.id}
                          gameName={item.gameName}
                          emailOrUsername={item.emailOrUsername}
                          date={item.date}/>
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

})