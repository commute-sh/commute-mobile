import React, { Component, PropTypes } from 'react';

import {
    View,
    TabBarIOS
} from 'react-native';

import MapTab from './MapTab';
import FavoriteTab from './FavoritesTab';
import SearchTab from './SearchTab';

class Root extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'map'
        };
    }

    onTabIconPress(selectedTab) {
        this.setState({ selectedTab: selectedTab });
    }

    render() {
        return (
            <TabBarIOS barTintColor="white" style={{ zIndex: 1, backgroundColor: 'white' }}>
                <MapTab selectedTab={this.state.selectedTab} onTabIconPress={this.onTabIconPress.bind(this, 'map')} />
                <FavoriteTab selectedTab={this.state.selectedTab} onTabIconPress={this.onTabIconPress.bind(this, 'favorites')} />
                <SearchTab selectedTab={this.state.selectedTab} onTabIconPress={this.onTabIconPress.bind(this, 'search')} />
            </TabBarIOS>
        );
    }

}

export default Root;