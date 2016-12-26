/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabBar from './components/TabBar.js';
import View1 from './component/View1.js';
import View2 from './component/View2.js';

export default class ReactNativeTemplate extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle={'light-content'}}/>
                <NavigatorIOS
                    initialRoute={{component: ReactNativeTemplateComponent, title: 'Back'}}
                    navigationBarHidden={true}
                    style={{flex: 1}}
                />
            </View>
        );
    }
}

class ReactNativeTemplateComponent extends Component {
    renderView = (currentView) => {
        if (currentView == 'View1') {
            return (
                <View1 nav={this.props.navigator} />
            )
        } else if (currentView == 'View2') {
            return (
                <View2 nav={this.props.navigator} />
            )
        }
    }

    render() {
        return (
            <View style={Styles.container}>
                <TabBar renderView={this.renderView} />
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 20,
    },
});

AppRegistry.registerComponent('ReactNativeTemplate', () => ReactNativeTemplate);
