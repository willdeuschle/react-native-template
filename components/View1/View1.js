import React from 'react';

import {
    View,
    Text,
} from 'react-native';


export default class View1 extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white'}}>
                    Rendering View 1
                </Text>
            </View>
        )
    }
}


export const View1Icon = 'book'
