import React from 'react';
import {
    TabBarIOS,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { View1Icon } from '../View1/View1.js';
import { View2Icon } from '../View2/View2.js';

export default class TabBar extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedTab: View1Icon
        }
    }

    render() {
        return (
            <TabBarIOS
                barTintColor='black'
                unselectedTintColor='white'
                tintColor='blue'
                itemPositioning='fill'
            >
                <Icon.TabBarItem
                    title='View1'
                    iconName={View1Icon}
                    selectedIconName={View1Icon}
                    selected={this.state.selectedTab == View1Icon}
                    onPress={() => {
                        this.setState({
                            selectedTab: View1Icon
                        });
                    }}
                >
                    {this.props.renderView('View1')}
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    title='View2'
                    iconName={View2Icon}
                    selectedIconName={View2Icon}
                    selected={this.state.selectedTab == View2Icon}
                    onPress={() => {
                        this.setState({
                            selectedTab: View2Icon
                        });
                    }}
                >
                    {this.props.renderView('View2')}
                </Icon.TabBarItem>
            </TabBarIOS>
        )
    }
}
