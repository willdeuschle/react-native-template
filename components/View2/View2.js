import React from 'react';

import {
    View,
    Text,
} from 'react-native';


export default class View2 extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white'}}>
                    Rendering View 2
                </Text>
            </View>
        )
    }
}


export const View2Icon = 'gavel'
