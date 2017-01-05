// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'; // Step 2

// Create a Component
const App = () => (
    // NOTE: For any component we create, we must return a single JSX tags.
    // We must wrap it into a single tag with a View tag.
    <View style={{ flex: 1 }}>{/*  Step 9  */}
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

// Render it to the device
AppRegistry.registerComponent('album', () => App);
