import React, { useState } from 'react';
import {Picker, View, StyleSheet} from 'react-native';
import { playerValues } from '../Constants';

export default function PlayerPicker(props) {
    const [selected, setSelected] = useState(playerValues[0])
    
    return (
        <View style={styles.view}>
            <Picker
                selectedValue={selected}
                style={styles.picker}
                mode='dropdown'
                onValueChange={(itemValue, itemIndex) => {
                    setSelected(itemValue)
                    props.picker(props.player, itemValue)
                }}>

                {playerValues.map( (v, k) => {
                    return (<Picker.Item key={k} label={v} value={v}></Picker.Item>)
                })}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({ 
    view: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        backgroundColor: 'lightblue'
    },
    picker: {
        height: 30,
        width: 150, 
        color: 'darkblue' 
    }
})