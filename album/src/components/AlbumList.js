import React, { Component } from 'react';
import { ScrollView } from 'react-native'; // Step 9
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} /> // Step 4
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>{/* Step 9 */}
                 {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
